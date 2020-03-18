import React from "react"
import styled from "styled-components"
import { withTheme } from "styled-components"

class FacebookComments extends React.Component {
  state = {
    curTheme: undefined,
  }

  componentDidMount() {
    this.setState({ curTheme: this.props.theme.curTheme })
  }
  // Listens to theme change
  componentWillReceiveProps(nextProps) {
    if (nextProps.theme.curTheme !== this.props.theme.curTheme) {
      this.setState({ curTheme: nextProps.theme.curTheme })
      // Reloads fb comments on theme change
      this.props.reload()
    }
  }

  render() {
    return (
      <StyledCommentsWrap>
        {this.state.curTheme && (
          <div
            className="fb-comments"
            data-href={this.props.location}
            data-width="100%"
            data-numposts="10"
            data-order-by={"social"}
            colorscheme={this.state.curTheme}
          ></div>
        )}
      </StyledCommentsWrap>
    )
  }
}

export default withTheme(FacebookComments)

const StyledCommentsWrap = styled.div`
  .fb-comments {
    width: 100vw;
    iframe {
      width: 100%;
      min-width: 100%;
    }
  }
`
