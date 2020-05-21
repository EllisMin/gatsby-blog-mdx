import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

class ScrollTopButton extends Component {
  _isMounted = false
  state = {
    intervalId: 0,
    scrollPosition: 0,
    show: false,
  }

  componentDidMount() {
    this._isMounted = true
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        if (this._isMounted) {
          this.setState({ show: true })
        }
      } else {
        if (this._isMounted) {
          this.setState({ show: false })
        }
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop = () => {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    )
    this.setState({ intervalId: intervalId })
  }

  render() {
    return this.state.show ? (
      <StyledButton
        className="btn-scroll-top"
        onClick={() => {
          this.scrollToTop()
        }}
      >
        <FontAwesomeIcon className="icon-chevron" icon={faAngleUp} size="3x" />
      </StyledButton>
    ) : null
  }
}

export default ScrollTopButton

const StyledButton = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 55px;
  right: 30px;
  z-index: 3;
  padding: 0 0.2rem;
  background: #7d7b92;
  opacity: 0.3;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: opacity 300ms linear;
  &:hover {
    opacity: 1;
  }
`
