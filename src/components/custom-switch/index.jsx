import React, { Component } from "react"
import Switch from "react-switch"
import { withTheme } from "styled-components"
import config from "../../../dmin-config"

import "./styles.scss"

class CustomSwitch extends Component {
  constructor(props) {
    super(props)

    if (config.defaultTheme === "dark") {
      this.state = { checked: true }
    } else {
      this.state = { checked: false }
    }
  }

  componentDidMount() {
    if (this.props.theme.mode !== "dark") {
      this.setState({ checked: false })
    } else {
      this.setState({ checked: true })
    }
  }
  handleToggle = checked => {
    this.setState({ checked })
    // Passed from ToggleMode to change theme
    this.props.onClick()
  }

  render() {
    return (
      <div className="custom-switch">
        <Switch
          onChange={this.handleToggle}
          checked={this.state.checked}
          offColor="#bbb"
          onColor="#4a4a4a"
          uncheckedIcon={
            <span
              className="icon-moon"
              role="img"
              aria-label="switch-label"
              style={{}}
            >
              🌙
            </span>
          }
          checkedIcon={
            <span className="icon-sun" role="img" aria-label="switch-label">
              ☀️
            </span>
          }
          handleDiameter={21}
          height={23}
          width={40}
          onHandleColor="#333"
        />
      </div>
    )
  }
}

export default withTheme(CustomSwitch)
