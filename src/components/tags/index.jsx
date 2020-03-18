import React from "react"
import Tag from "./tag"
import { isMobile } from "react-device-detect"
import styled from "styled-components"

class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.tagRef = React.createRef()
    this.state = {
      sticky: undefined,
      topPos: undefined,
    }
  }

  componentDidMount() {
    if (isMobile) {
      this.setState({
        sticky: this.tagRef.current,
        topPos:
          this.tagRef.current.getBoundingClientRect().y + window.pageYOffset,
      })

      window.addEventListener("scroll", this.detectSticky)
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.detectSticky)
  }

  detectSticky = () => {
    const { sticky, topPos } = this.state
    const offset = topPos - window.pageYOffset
    const activated = offset <= 0
    const activatedNear = activated && offset >= -55

    if (activatedNear) {
      sticky.classList.add("moveToBotAnimate")
    } else if (activated) {
      sticky.classList.add("moveToBot")
    } else {
      this.unmountTagsAnimation()
    }
  }

  unmountTagsAnimation = () => {
    const sticky = this.tagRef.current
    sticky.classList.remove("moveToBot")
    sticky.classList.remove("moveToBotAnimate")
  }

  render() {
    const { tags, selectTag, selectedTag } = this.props
    const childrenElement = (
      <div className="tag-list">
        {/* Used to apply overflow to work with sticky */}
        <div className="tag-list-inner">
          <Tag title={"all"} selectTag={selectTag} selectedTag={selectedTag} />
          {tags.map((tag, i) => {
            return (
              <Tag
                key={i}
                title={tag}
                selectTag={selectTag}
                selectedTag={selectedTag}
              />
            )
          })}
        </div>
      </div>
    )

    return !isMobile ? (
      <StyledTagsVertical className="tags-vertical">
        {childrenElement}
      </StyledTagsVertical>
    ) : (
      <StyledTagsHorizontal className="tags-horizontal" ref={this.tagRef}>
        {childrenElement}
      </StyledTagsHorizontal>
    )
  }
}

export default Tags

const StyledTagsVertical = styled.div`
  margin-top: 0.5rem;
  background: none !important;
  border-left: none;
  .tag-list {
    position: sticky;
    top: 50px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5rem;
    &-inner {
      width: 120px;
      overflow-x: auto;
    }
  }
  @media (max-width: 500px) {
    .tag-list {
      &-inner {
        width: 80px;
        font-size: 0.75rem;
      }
    }
  }
`

const StyledTagsHorizontal = styled.div`
  position: static;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 1.8rem 0.2rem;
  width: 100%;
  height: 46px;
  translate: transform 500ms ease-in;
  margin: 1rem 0;

  .tag-list {
    width: 100%;
    &-inner {
      display: flex;
      flex-direction: row;
      padding: 1.3rem 0rem;
      width: inherit;
      overflow-x: auto;
      /* Hide scrollbar */
      ::-webkit-scrollbar {
        width: 0px;
        display: none;
      }
    }
  }
`
