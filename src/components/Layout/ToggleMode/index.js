import React from "react"
import { ThemeConsumer } from "styled-components"
import CustomSwitch from "../../CustomSwitch"

const ToggleMode = props => {
  return (
    <ThemeConsumer>
      {theme => {
        return (
          <CustomSwitch
            onClick={e =>
              theme.setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          />
        )
      }}
    </ThemeConsumer>
  )
}
export default ToggleMode
