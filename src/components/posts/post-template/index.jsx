import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import mediumZoom from "medium-zoom"
import storage from "local-storage-fallback"
import { isMobile } from "react-device-detect"
import config from "../../../../dmin-config"
import Layout from "../../layout"
import Hr from "../../hr"
import Profile from "../../profile"
import SEO from "../../seo"
import FacebookComments from "../../facebook-comments"
import ToggleMode from "../../layout/toggle-mode"
import { theme } from "../../shared/styles-global"
import LinkEdgePosts from "../../link-edge-posts"
import "./code-block.styles.scss" // Code block styling

import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share"

class PostTemplate extends React.Component {
  state = {
    location: "",
    script: undefined,
    texts: [],
  }
  componentDidMount() {
    this.registerFacebookComments()
    this.setState({ location: window.location.href })
    if (isMobile) {
      this.moveAnchorHeadings()
    }
    this.zoomImages()
    this.insertCopyBtn()
  }

  componentDidUpdate() {
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }

  registerFacebookComments = () => {
    // Unregister if already exists
    this.unregisterFacebookComments()

    // Register facebook comments sdk
    const script = document.createElement("script")
    script.src = "https://connect.facebook.net/en_US/sdk.js"
    script.async = true
    script.defer = true
    script.crossOrigin = "anonymous"
    // Set as state to unmount script
    this.setState({ script: script })
    document.body.appendChild(script)
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: config.fbAppId,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v6.0",
      })
    }
  }

  unregisterFacebookComments = () => {
    // Unmount script and comments div
    if (this.state.script) {
      document.body.removeChild(this.state.script)
      const fbRoot = document.getElementById("fb-root")

      if (fbRoot) {
        document.body.removeChild(fbRoot)
      }

      this.setState({ script: undefined })
    }
  }

  componentWillUnmount() {
    this.unregisterFacebookComments()
  }

  zoomImages = () => {
    const targetImg = "img"
    const targetGatsbyImg = "gatsby-resp-image-image"
    const images = Array.from(document.querySelectorAll(targetImg))
    const filteredImages = []
    for (let i = 0; i < images.length; i++) {
      const img = images[i]
      // Filter profile image
      const isProfile = document.querySelector(".img-profile").contains(img)
      if (!isProfile) {
        // Set maximum width/height to non-gatsby images
        if (!img.classList.contains(targetGatsbyImg)) {
          img.classList.add("img-not-gatsby-remark")
        }
        filteredImages.push(img)
      }
    }

    let mediumZoomBgColor = ""
    const savedTheme = JSON.parse(storage.getItem("theme")) || "light"
    mediumZoomBgColor =
      savedTheme.mode === "light" ? theme.bgSubColorLight : theme.bgSubColorDark

    // Apply medium zoom to images
    mediumZoom(filteredImages, {
      margin: 24,
      background: mediumZoomBgColor,
    })
  }

  // Move anchor headings to the right side on mobile
  moveAnchorHeadings = () => {
    const target = ".anchor-heading"
    const anchors = Array.from(document.querySelectorAll(target))
    anchors.forEach(anchor => {
      anchor.parentNode.appendChild(anchor)
      anchor.classList.add("after")
      anchor.classList.remove("before")
    })
  }

  fallbackCopyToClipboard = (text, copyBtn) => {
    const textArea = document.createElement("textarea")
    textArea.value = text
    // Avoid scrolling to bottom
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand("copy")
      copyBtn.textContent = "Copied!"
    } catch (err) {
      copyBtn.textContent = "Copied Failed"
    }
    document.body.removeChild(textArea)
  }

  copyToClipboard = (id, copyBtn) => {
    const text = this.state.texts[id].content
    if (!navigator.clipboard) {
      this.fallbackCopyToClipboard(text, copyBtn)
      return
    }
    navigator.clipboard.writeText(text).then(
      function() {
        copyBtn.textContent = "Copied!"
      },
      function(err) {
        copyBtn.textContent = "Copy Failed"
      }
    )
  }

  setPrevState = (i, texts) => {
    this.setState(prevState => {
      return {
        texts: [...prevState.texts, { id: i, content: texts }],
      }
    })
  }

  // Inserts copy button to code blocks
  insertCopyBtn = () => {
    const codeBlocks = document.querySelectorAll("div.gatsby-highlight")
    const codeBlocksArr = [...codeBlocks]
    codeBlocksArr.forEach((codeBlock, i) => {
      let texts = ""
      const codeElement = codeBlock.querySelector("code")
      // Retrieve texts from code each code block
      const nodeArr = [...codeElement.childNodes]

      nodeArr.forEach(node => {
        // For highlighted code lines; highlighted code lines has <span>texts</span> as its children
        if (
          node.classList &&
          node.classList.contains("gatsby-highlight-code-line")
        ) {
          node.childNodes.forEach(n => {
            texts += n.textContent
          })
          texts += "\n"
        }
        // Non-highlighted code lines
        else {
          texts += node.textContent
        }
      })

      this.setPrevState(i, texts)
      // Create copy button to be attached to code blocks
      const copyBtn = document.createElement("button")
      copyBtn.textContent = "Copy"
      copyBtn.setAttribute("class", "btn-copy")
      copyBtn.onclick = () => this.copyToClipboard(i, copyBtn)
      codeBlock.appendChild(copyBtn)
      texts = "" // Reset texts for upcoming iteration
    })
  }

  render() {
    const post = this.props.data.markdownRemark
    const isAboutPage = post.fields.slug.includes("/about")

    return (
      <Layout showTitle={true} isPostTemplate>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div
          className="switch-container"
          style={{ textAlign: "end", margin: "0 1.1rem" }}
        >
          <ToggleMode />
        </div>
        <StyledHTML className="post-html">
          {!isAboutPage && (
            <>
              <h1 className="post-title">{post.frontmatter.title}</h1>
              {/* Show tag & date */}
              <div
                className="post-data"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex" }}>
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map((tag, i) => (
                        <p
                          key={i}
                          style={{
                            margin: "0.5rem 0.3rem",
                            padding: "0.15rem 0.4rem",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                            fontSize: "0.8rem",
                          }}
                        >
                          {tag}
                        </p>
                      ))}
                  </div>
                </div>
                <p style={{ fontStyle: "italic" }}>{post.frontmatter.date}</p>
              </div>
              <Hr />
            </>
          )}
          {/* HTML markup inside */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledHTML>

        {!isAboutPage && (
          <>
            <StyledSharedBtnContainer>
              {config.shareButtons.email && (
                <EmailShareButton url={this.state.location}>
                  <EmailIcon round size={32} />
                </EmailShareButton>
              )}
              {config.shareButtons.facebook && (
                <FacebookShareButton url={this.state.location}>
                  <FacebookIcon round size={32} />
                </FacebookShareButton>
              )}
              {config.shareButtons.twitter && (
                <TwitterShareButton url={this.state.location}>
                  <TwitterIcon round size={32} />
                </TwitterShareButton>
              )}
              {config.shareButtons.reddit && (
                <RedditShareButton url={this.state.location}>
                  <RedditIcon round size={32} />
                </RedditShareButton>
              )}
              {config.shareButtons.linkedIn && (
                <LinkedinShareButton url={this.state.location}>
                  <LinkedinIcon round size={32} />
                </LinkedinShareButton>
              )}
            </StyledSharedBtnContainer>
            <LinkEdgePosts pageContext={this.props.pageContext} />
            <Hr widthInPercent="97" verticalMargin="0.8rem" />
            <Profile />
            <Hr widthInPercent="97" verticalMargin="0.8rem" />
            <FacebookComments
              location={this.state.location}
              reload={this.registerFacebookComments}
            />
          </>
        )}
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        tags
      }
    }
  }
`

export default PostTemplate

const StyledHTML = styled.div`
  word-wrap: break-word;
  padding: 1rem;
  font-family: ${config.fontPosts + config.fontsBackUp};
  margin-top: 1rem;
  h1 {
    margin-top: 2.5rem;
  }

  .post-title {
    margin-top: 0;
  }

  h2 {
    margin-top: 2rem;
  }

  h3 {
    margin-top: 1.3rem;
  }

  p {
    margin-top: 0.9rem;
  }

  blockquote {
    padding: 0.3rem 1rem;
    margin: 0.5rem 0;

    > p {
      margin-top: 0.5rem;
    }
    
    > blockquote {
      border-left: none;
      font-size: 1.2rem;
      > blockquote {
        font-size: 1.3rem;
      }
    }
  }

  a {
    color: steelblue;
  }

  ul,
  ol {
    margin: 0.5rem 1.5rem;
    li {
      margin: 0.5rem 0;
    }
  }

  pre {
    font-family: inherit;
  }

  img {
    margin: 0.35rem 0;
  }

  .gatsby-resp-image-wrapper {
    margin: 0.5rem 0;
  }

  @media (max-width: 500px) {
    padding: 0.5rem 1rem;
  }
`

const StyledSharedBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.2rem 0.4rem;

  * {
    margin: 0 0.2rem;
  }
`
