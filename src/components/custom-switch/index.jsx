import React, { Component } from "react"
import Switch from "react-switch"
import { withTheme } from "styled-components"
import config from "../../../dmin-config"

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
              role="img"
              aria-label="switch-label"
              style={{
                position: "absolute",
                top: "3px",
                right: "3px",
                fontSize: "0.65rem",
              }}
            >
              🌙
            </span>
          }
          checkedIcon={
            <span
              role="img"
              aria-label="switch-label"
              style={{
                position: "absolute",
                top: "3px",
                left: "3px",
                fontSize: "0.65rem",
              }}
            >
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
