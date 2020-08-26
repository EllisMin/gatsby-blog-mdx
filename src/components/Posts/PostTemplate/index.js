import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import mediumZoom from "medium-zoom"
import storage from "local-storage-fallback"
import { isMobile } from "react-device-detect"
import { setThemeVars } from "../../../util/theme-helper"
import { comments } from "../../../../customize"
import configStyles from "../../../../customize-styles"
import Layout from "../../Layout"
import Hr from "../../Hr"
import Profile from "../../Profile"
import SEO from "../../SEO"
import {
  FacebookComments,
  DisqusComments,
  UtterancesComments,
} from "../../Comments"
import ToggleMode from "../../Layout/ToggleMode"
import { theme } from "../../Shared/styles-global"
import LinkEdgePosts from "../../LinkEdgePosts"
import ShareButtons from "../../ShareButtons"
import ChevronRight from "../../../../_assets/icons/chevron-right.svg"
import {
  Primary,
  Danger,
  Warning,
  Success,
  Info,
  Collapsable,
  U,
} from "../../MdxComponents"

class PostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.utterancesRef = React.createRef()
    this.state = {
      location: "",
      script: undefined,
      texts: [],
    }
  }

  componentDidMount() {
    this.setState({ location: window.location.href })
    if (isMobile) {
      this.moveAnchorHeadings()
    }
    this.zoomImages()
    if (comments.facebook.enabled) {
      this.registerFacebookComments()
    }
    if (comments.utterances.enabled && comments.utterances.repoUrl) {
      this.registerUtterancesComments(comments.utterances.repoUrl)
    }
  }

  componentDidUpdate() {
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }

  registerUtterancesComments = repo => {
    // Register utterances if it exists
    if (this.utterancesRef.current) {
      const script = document.createElement("script")
      script.src = "https://utteranc.es/client.js"
      script.async = true
      script.crossOrigin = "anonymous"
      script.setAttribute("repo", repo)
      script.setAttribute("issue-term", "pathname")
      script.setAttribute("label", "blog-comment")
      script.setAttribute(
        "theme",
        `${theme.curTheme === "dark" ? "github-dark" : "github-light"}`
      )
      this.utterancesRef.current.appendChild(script)
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
        appId: comments.facebook.appId,
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
      const profile = document.querySelector(".img-profile")
      if (profile) {
        const isProfile = profile.contains(img)
        if (!isProfile) {
          // Set maximum width/height to non-gatsby images
          if (!img.classList.contains(targetGatsbyImg)) {
            img.classList.add("img-not-gatsby-remark")
          }
          filteredImages.push(img)
        }
      }
    }

    let mediumZoomBgColor = ""
    const savedTheme = JSON.parse(storage.getItem("theme")) || "light"
    mediumZoomBgColor =
      savedTheme.mode === "light" ? theme.bgColorLight : theme.bgColorDark

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

  // Toggle loading for changing copy texts
  toggleLoading = text => {
    this.setState(prevState => {
      const updatedTexts = [...prevState.texts]
      updatedTexts.forEach(t => {
        if (t.id === text.id) {
          t.loadingChange = !t.loadingChange
        }
      })
      return {
        texts: updatedTexts,
      }
    })
  }

  render() {
    const post = this.props.data.mdx
    const isAboutPage = post.fields.slug.includes("/about")

    // Customize markdown component
    const mdxComponents = {
      "ul.li": ({ children }) => {
        return (
          <li>
            <span className="icon-wrap">
              <ChevronRight className="icon-chevron-right" />
            </span>
            <span className="ul-children">{children}</span>
          </li>
        )
      },
      "ol.li": ({ children }) => {
        return (
          <li>
            <span>{children}</span>
          </li>
        )
      },
      hr: () => <Hr widthInPercent="100" verticalMargin="0.8rem" />,
      // Use the below components without having to import in *.mdx
      Primary,
      Danger,
      Warning,
      Success,
      Info,
      Collapsable,
      U,
    }

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
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map((tag, i) => (
                        <p
                          key={i}
                          style={{
                            margin: "0.3rem 0.3rem",
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
                <p
                  style={{
                    fontStyle: "italic",
                    margin: "0",
                    marginBottom: "0.3rem",
                  }}
                >
                  {post.frontmatter.date}
                </p>
              </div>
              <Hr />
            </>
          )}
          {/* Render mdx */}
          <MDXProvider components={mdxComponents}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </StyledHTML>

        {!isAboutPage && (
          <>
            <ShareButtons location={this.state.location} />
            <LinkEdgePosts pageContext={this.props.pageContext} />
            <Hr widthInPercent="97" verticalMargin="0.8rem" />
            <Profile />
            <Hr widthInPercent="97" verticalMargin="0.8rem" />

            {comments.facebook.enabled && (
              <FacebookComments
                location={this.state.location}
                reload={this.registerFacebookComments}
              />
            )}
            {comments.disqus.enabled && comments.disqus.shortName && (
              <DisqusComments
                shortName={comments.disqus.shortName}
                location={this.state.location}
              />
            )}
            {comments.utterances.enabled && comments.utterances.repoUrl && (
              <UtterancesComments innerRef={this.utterancesRef} />
            )}
          </>
        )}
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
  font-family: ${configStyles.fontMain + configStyles.fontsBackUp};
  margin-top: 1rem;
  font-size: 105%;
  h1 {
    margin-top: 2.5rem;
  }

  .post-title {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 2rem;
  }

  h3 {
    margin-top: 1.3rem;
  }

  h4 {
    margin-top: 1rem;
  }

  h5 {
    margin-top: 0.8rem;
  }

  h6 {
    margin-top: 0.6rem;
  }

  p {
    margin-top: 0.9rem;
    line-height: 1.4;
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

  ul {
    list-style: none;
    margin: 1rem 0.3rem;
    li {
      display: flex;
      justify-content: flex-start;
      margin: 0.5rem 0;
      /* Custom list for ul */
      .icon-wrap {
        svg.icon-chevron-right {
          display: inline-block;
          width: 0.75rem;
          height: 0.75rem;
          margin-right: 0.5rem;
          fill: ${() =>
            setThemeVars(
              configStyles.fontColorLight,
              configStyles.fontColorDark
            )};
        }
      }
      span.ul-children {
        width: 100%;
        & > p:first-child {
          display: inline;
        }
      }
    }
  }

  ol {
    margin: 0.5rem 1.2rem;
    li {
      margin: 1rem 0;
      margin-left: 0.3rem;
      span {
        margin-left: 0.15rem;
      }
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

    .post-title {
      font-size: 2rem;
    }

    ul,
    ol {
      margin-right: 1rem;
    }
  }
`
