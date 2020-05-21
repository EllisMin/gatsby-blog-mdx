import React, { Component } from "react"
import styled from "styled-components"
import Profile from "../Profile"
import Tags from "../Tags"
import PostList from "../Posts/PostList"
import Loader from "../Loader"
import ToggleMode from "../Layout/ToggleMode"
import { isMobile } from "react-device-detect"
import { TAG } from "../../constants"

class MainCard extends Component {
  state = {
    selectedTag: TAG.ALL,
    filteredPosts: [],
    tags: [],
  }

  componentDidMount() {
    // Get current viewing tag from storage
    let curTag = sessionStorage.getItem("curTag") || TAG.ALL
    const tagExists = this.checkTag(curTag)
    // If saved tag in storage doesn't exist among posts, set to "all"
    if (!tagExists) {
      curTag = TAG.ALL
    }
    this.setState({ selectedTag: curTag }, () => {
      this.filterPosts()
      this.filterTags()
    })
  }

  // Check if tag in storage exists
  checkTag = storageTag => {
    // Input checks
    if (!storageTag) {
      return false
    }
    if (storageTag === TAG.ALL) {
      return true
    }
    const posts = this.props.posts
    for (let i = 0; i < posts.length; i++) {
      const tags = posts[i].node.frontmatter.tags
      if (tags && tags.length > 0 && tags.includes(storageTag)) {
        return true
      }
    }
    return false
  }

  // Filter tags and sort them by occurrences
  filterTags = () => {
    const posts = this.props.posts
    const tagsByFrequency = {}
    const sortedTags = []
    // Exclude about page & dummy page
    const filteredPosts = posts.filter(
      post =>
        post.node.fields.slug !== "/about/" &&
        post.node.fields.slug !== "/__do-not-remove/"
    )
    filteredPosts.forEach(post => {
      let tags = post.node.frontmatter.tags

      if (!tags) {
        // Register tag to the post if does not have any
        post.node.frontmatter.tags = ["Uncategorized"]
        tags = ["Uncategorized"]
      }

      tags.forEach(tag => {
        if (tagsByFrequency[tag]) {
          tagsByFrequency[tag] = tagsByFrequency[tag] + 1 // update frequency
        } else {
          tagsByFrequency[tag] = 1
          sortedTags.push(tag)
        }
      })
    })

    sortedTags.sort(function(a, b) {
      return tagsByFrequency[b] - tagsByFrequency[a]
    })

    this.setState({ tags: sortedTags })
  }

  filterPosts = () => {
    const posts = this.props.posts
    const filtered = posts.filter(({ node }, i) => {
      return (
        this.state.selectedTag === TAG.ALL ||
        (node.frontmatter.tags &&
          node.frontmatter.tags.includes(this.state.selectedTag))
      )
    })

    this.setState({ filteredPosts: filtered })
  }

  handleSelectTag = async tag => {
    // Save current tag in storage
    sessionStorage.setItem("curTag", tag)
    await this.setState({ selectedTag: tag })
    await this.filterPosts()
  }

  render() {
    return (
      <StyledMainCard className="main-card">
        <StyledSwitchContainer className="switch-container">
          <ToggleMode />
        </StyledSwitchContainer>
        <StyledSubMain className="sub-main">
          <StyledSubMainInner>
            <Profile home />
            {this.state.filteredPosts.length > 0 ? (
              <StyledTagsPosts>
                <Tags
                  selectedTag={this.state.selectedTag}
                  selectTag={this.handleSelectTag}
                  tags={this.state.tags}
                />
                <PostList
                  posts={this.state.filteredPosts.slice(0, this.props.loads)}
                />
              </StyledTagsPosts>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Loader />
              </div>
            )}
          </StyledSubMainInner>
        </StyledSubMain>
      </StyledMainCard>
    )
  }
}

export default MainCard

let StyledTagsPosts = styled.div``

StyledTagsPosts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .moveToBot {
    position: sticky;
    top: 0;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .tag-list {
      .tag-horizontal {
        font-size: 0.85rem;
      }
    }
  }

  .moveToBotAnimate {
    position: sticky;
    top: 0;
    transition: padding 300ms ease-in;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .tag-list {
      .tag-horizontal {
        transition: font-size 300ms ease-in;
        font-size: 0.85rem;
      }
    }
  }
`
if (!isMobile) {
  StyledTagsPosts = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 0.25fr auto;
    padding: 0.5rem 1.5rem 1.5rem 1.5rem;

    @media (max-width: 500px) {
      padding: 0rem 1rem 1rem 1rem;
    }
  `
}

const StyledMainCard = styled.div`
  position: relative;
  padding: 0 1rem 1rem 1rem;

  @media (max-width: 500px) {
    padding: 0;
  }
`

const StyledSubMain = styled.div`
  position: relative;
  margin-top: 3rem;
  border-radius: 10px;

  @media (max-width: 500px) {
    margin-top: 1rem;
    border-radius: 0px;
  }
`

let StyledSubMainInner = styled.div``

if (!isMobile) {
  StyledSubMainInner = styled.div`
    transform: translateY(-25px);
  `
}

const StyledSwitchContainer = styled.div`
  position: absolute;
  text-align: end;
  margin: 0 0.4rem;
  top: 12px;
  right: 25px;
  z-index: 2;

  @media (max-width: 500px) {
    right: 10px;
  }
`
