import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { theme } from "../../Shared/styles-global"
import { setThemeVars } from "../../../util/theme-helper"
// Icons
import Warning from "../../../../_assets/icons/warning.svg"
import Success from "../../../../_assets/icons/success.svg"
import Info from "../../../../_assets/icons/info.svg"
import Stop from "../../../../_assets/icons/stop.svg"

const TextBlock = ({ theme, children, padding = "2rem 1.5rem" }) => {
  let iconElement

  switch (theme) {
    case "success":
      iconElement = <Success />
      break
    case "warning":
      iconElement = <Warning />
      break
    case "danger":
      iconElement = <Stop />
      break
    // For 'info' & 'primary'
    default:
      iconElement = <Info />
  }

  return (
    <StyledTextBlock theme={theme} padding={padding}>
      <StyledIconWrap theme={theme}>{iconElement}</StyledIconWrap>
      {children}
    </StyledTextBlock>
  )
}

export default TextBlock

// Check props
TextBlock.propTypes = {
  theme: PropTypes.string.isRequired,
}

// Themes
const color = {
  success: `#46c763`,
  info: `#17a2b8`,
  warning: `#ffc107`,
  danger: `#ee5252`,
}

const bgColorLight = {
  success: `#e0f8e5`,
  info: `#daf1f4`,
  warning: `#f8f1e4`,
  danger: `#f8e4e4`,
}

const bgColorDark = {
  success: `#3f774b`,
  info: `#2e5d64`,
  warning: `#796733`,
  danger: `#693434`,
}

const StyledTextBlock = styled.div`
  position: relative;
  border-left-width: 3px;
  border-left-style: solid;
  margin: 2rem 1rem;
  border-radius: 5px;
  padding: ${({ padding }) => padding};

  /* Default for primary */
  border-color: ${() => setThemeVars("#666", theme.fontColorDark)};
  background: ${() => setThemeVars("#f6f5f8", `#36353b`)};
  /* Based on chosen theme */
  border-color: ${props => color[props.theme]};
  background: ${props =>
    setThemeVars(bgColorLight[props.theme], bgColorDark[props.theme])};
`

const StyledIconWrap = styled.div`
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  background: ${() => setThemeVars(theme.bgColorLight, theme.bgColorDark)};
  padding: 0.5rem;
  border-radius: 50%;
  svg {
    width: 30px;
    height: 30px;
    /* Default */
    fill: ${() => setThemeVars("#666", theme.fontColorDark)};
    /* Theme */
    fill: ${props => color[props.theme]};
  }
`
