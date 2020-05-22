import { createGlobalStyle, keyframes } from "styled-components"
import { isMobile } from "react-device-detect"
import { setThemeVars } from "../../util/theme-helper"
import config from "../../../customize"
import configStyles from "../../../customize-styles"

const globalVar = {
  primaryColor: "#fff",
  secondaryColor: "#333",
  bgColorLight: configStyles.bgColorLight,
  bgColorDark: configStyles.bgColorDark,
  bgSubColorLight: configStyles.bgSubColorLight,
  bgSubColorDark: configStyles.bgSubColorDark,
  headerColorLight: configStyles.headerColorLight,
  headerColorDark: configStyles.headerColorDark,
  fontColorLight: configStyles.fontColorLight,
  fontSubColorLight: configStyles.fontSubColorLight,
  fontColorDark: configStyles.fontColorDark,
  fontSubColorDark: configStyles.fontSubColorDark,
  darkColor: "#333",
  midColor: "#444",
  darkerColor: "#2c2c39",
  subColor: "grey",
  lightGreyColor: "#eee",
  midGreyColor: "#ccc",
  mintColor: "#bfe2ca",
  maxWidthSite: config.maxWidth,

  // @mixin disable-selection()
  disableSelection: `-webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;`,
  curTheme: "",
}

// global variables are passed down to themes to be used in other styled components
export const theme = {
  ...globalVar,
}

let profileHomeBorder = () => setThemeVars("#ddd", "#333")
if (isMobile) profileHomeBorder = "transparent"

const glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`

const foregroundColor = () =>
  setThemeVars(theme.fontColorLight, theme.fontColorDark)

const scrollBarColor = () =>
  setThemeVars(
    configStyles.scrollbarColorLight,
    configStyles.scrollbarColorDark
  )

const scrollBarBg = () =>
  setThemeVars(configStyles.scrollbarBgLight, configStyles.scrollbarBgDark)
const scrollBarHover = () =>
  setThemeVars(
    configStyles.scrollbarHoverLight,
    configStyles.scrollbarHoverDark
  )

const underlineColor = () =>
  setThemeVars(
    configStyles.underlineColorLight,
    configStyles.underlineColorDark
  )

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background 250ms ease-in, border 250ms ease-in;
  }

  body {
    align-items: center;
    background: ${() =>
      setThemeVars(theme.bgSubColorLight, theme.bgSubColorDark)};
    color: ${foregroundColor};
    font-family: ${configStyles.fontMain + configStyles.fontsBackUp}
  }

  header,
  footer {
    color: ${foregroundColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    color: ${foregroundColor};
  }

  a {
    text-decoration: none;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  .text-md {
    font-size: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-xs {
    font-size: 0.7rem;
  }

  .font-bold {
    font-weight: bold;
  }

  .font-md {
    font-weight: 500;
  }

  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }

  .main-header {
    border-bottom: 1px solid ${() => setThemeVars("#dbdbdb", "#2d2d2d")};
    background: ${() =>
      setThemeVars(theme.headerColorLight, theme.headerColorDark)};
  }

  .sub-main {
    -webkit-box-shadow: 0px 0px 8px -5px ${() =>
      setThemeVars("#000000bf", "#000000bf")};
    -moz-box-shadow: 0px 0px 8px -5px ${() =>
      setThemeVars("#000000bf", "#000000bf")};
    box-shadow: 0px 0px 8px -5px ${() =>
      setThemeVars("#000000bf", "#000000bf")};

    background: ${() => setThemeVars(theme.bgColorLight, theme.bgColorDark)}; 
  }

  .profile-home {
    border-bottom: 1px solid ${profileHomeBorder};
  }

  .profile-image-inner-inner{
    background: ${() => setThemeVars(theme.bgColorLight, theme.bgColorDark)}
  }

  .profile-texts {
    h4, p, p > a {
      color: ${() =>
        setThemeVars(theme.fontSubColorLight, theme.fontSubColorDark)};
    }
  }

  .icon-fa {
    margin: 0 0.3rem;
    &-link {
      opacity: 0.8;
      :hover {
        opacity: 1;
      }
    }
  }

  .post-bg-color {
    background: ${() => setThemeVars(theme.bgColorLight, theme.bgColorDark)}
  }

  .img-not-gatsby-remark {
    width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
    display:block;
    margin: 0.35rem auto !important;
  }

  .link-edge-posts {
    li {
      background: ${() => setThemeVars("#fafafa", "#2f2d33")};

      &:hover {
        background: ${() => setThemeVars("#ededef", "#333138")};
      }
    }
  }

  .progress-container {
    background: ${() =>
      setThemeVars(theme.headerColorLight, theme.headerColorDark)};
    .progress-bar {
      background: ${() =>
        setThemeVars(
          configStyles.progressBarColorLight,
          configStyles.progressBarColorLight
        )};
    }
  }

  .custom-underline {
    border-color: ${underlineColor}
  }


  .main-card-name {
    h2 {
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;

      :before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(1px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: ${glowing} 28s linear infinite;
        opacity: ${() => setThemeVars("0.2", "0.12")};
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
      }
      :active {
        color: #000
      }
      :active:after {
        background: transparent;
      }
      :hover:before {
        opacity: 0.6;
      }
      :after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px;
      }
    }
  }

  .main-footer {
    color: ${() => setThemeVars("#ccc", theme.subColor)};
    border-top: 1px solid ${() =>
      setThemeVars(theme.lightGreyColor, theme.darkColor)};
    a {
      ${() => setThemeVars(theme.darkColor, theme.primaryColor)};
    }
  }

  .post-html {
    blockquote {
      color: ${() =>
        setThemeVars(theme.fontSubColorLight, theme.fontSubColorDark)};
      border-left: 3px solid ${() =>
        setThemeVars(theme.midGreyColor, theme.midColor)};
    }
  }

    /* Anchor next to headings */
  a.anchor-heading {
    svg {
      fill: ${() => setThemeVars(theme.darkColor, theme.primaryColor)};
    }
  }

  .tags {
    &-horizontal {
      -webkit-box-shadow: 0px 0px 7px -5px ${() =>
        setThemeVars("#000000bf", "#000000bf")};
      -moz-box-shadow: 0px 0px 7px -5px ${() =>
        setThemeVars("#000000bf", "#000000bf")};
      box-shadow: 0px 0px 7px -5px ${() =>
        setThemeVars("#000000bf", "#000000bf")};

      background: ${() => setThemeVars("#f5f5f5", theme.headerColorDark)};
      border-left: 3px solid ${() => setThemeVars("#bbb", "#444")};
      border-right: 3px solid ${() => setThemeVars("#bbb", "#444")};
      border-top: 1px solid ${() => setThemeVars("#eee", "#333")};
      border-bottom: 1px solid ${() => setThemeVars("#eee", "#333")};
      color: ${() => setThemeVars("#888", "#c9c9c9")}
    }
  }
  

  .tag {
    &-horizontal {  
      background: ${() => setThemeVars("#fff", "#3a3d56")};
      &:hover{
        background: ${() => setThemeVars("#fff !important", "#3a3d56 !important")};
      }
    }

    &-vertical {
      &:hover{
        background: ${() =>
          setThemeVars(theme.bgColorLight, theme.darkerColor)};
      }
    }
  }

  .custom-hr {
    border-top-color: ${() => setThemeVars("#e7e6e8", "#414044")};
  }

  .icon-hand-ptr {
    color: ${() => setThemeVars("#555", "#eee")}
  }

  .medium-zoom-overlay {
    z-index: 4;
  }
  .medium-zoom-image--opened {
    z-index: 5;
  }

  ${"" /* Applies to react live code */}
  .live-highlight {
      font-family: ${configStyles.fontCodeBlocks +
        configStyles.fontsBackUp} !important;
  }

  ${"" /* Custom scrollbar styling for non mobile */}
    &::-webkit-scrollbar {
      height: ${isMobile ? "" : "13px"};
      width: ${isMobile ? "" : "13px"};
      border-radius: ${isMobile ? "" : "20px"};
    }

    &::-webkit-scrollbar-track {
      background: ${scrollBarBg};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: ${scrollBarColor};
      &:hover {
        background: ${scrollBarHover};
      }
      &:active {
        background: ${scrollBarColor}
      }
      border: 2px solid ${scrollBarBg};
      background-clip: padding-box;
    }

  table {
    display: block;
    font-family: sans-serif;
    margin: 0.5rem 0;
    width: 100%;
    border-collapse: collapse;
    overflow-x: auto;
    & + table {
      margin-top: 1rem;
    }
  }
  
  thead {
    background: ${() => setThemeVars("#eee", "#343434")};
    border-bottom: 2px solid ${() => setThemeVars("#ddd", "#444")};
  }

  th {
    padding: 0.5rem;
    font-weight: bold;
    text-align: left;
  }

  td {
    padding: 0.5rem;
    border-bottom: 1px solid ${() => setThemeVars("#ddd", "#444")};
  }

  tr,
  td,
  th {
    vertical-align: middle;
  }
`