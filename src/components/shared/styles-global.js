import { createGlobalStyle, keyframes } from "styled-components"
import { setThemeVars } from "../../util/theme-helper"
import { isMobile } from "react-device-detect"
import config from "../../../dmin-config"

const globalVar = {
  primaryColor: "#fff",
  secondaryColor: "#333",
  bgColorLight: config.bgColorLight,
  bgColorDark: config.bgColorDark,
  bgSubColorLight: config.bgSubColorLight,
  bgSubColorDark: config.bgSubColorDark,
  headerColorLight: config.headerColorLight,
  headerColorDark: config.headerColorDark,
  darkColor: "#333",
  midColor: "#444",
  darkerColor: "#313143",
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
  setThemeVars(theme.darkerColor, theme.primaryColor)

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background 250ms ease-in, border 250ms ease-in;
  }

  body {
    align-items: center;
    background: ${() => setThemeVars(theme.bgColorLight, theme.bgColorDark)};
    color: ${foregroundColor};
    font-family: ${config.fontMain + config.fontsBackUp}
  }

  header,
  footer {
    color: ${foregroundColor};
  }

  h1,
  h2,
  h3,
  h4,
  a {
    color: ${foregroundColor};
  }

  a {
    text-decoration: none;
  }


  .main-header {
    border-bottom: 1px solid ${() => setThemeVars("#dbdbdb", "#2d2d2d")};
    background: ${() =>
      setThemeVars(theme.headerColorLight, theme.headerColorDark)};
    
  }

  .icon-github {
    color: ${() => setThemeVars(theme.darkColor, theme.primaryColor)}
  }

  .sub-main {
    -webkit-box-shadow: 0px 0px 8px -5px ${() =>
      setThemeVars("#000000bf", "#000000bf")};
    -moz-box-shadow: 0px 0px 8px -5px ${() =>
      setThemeVars("#000000bf", "#000000bf")};
    box-shadow: 0px 0px 8px -5px ${() =>
      setThemeVars("#000000bf", "#000000bf")};

    background: ${() =>
      setThemeVars(theme.bgSubColorLight, theme.bgSubColorDark)};
    
  }

  .profile-home {
    border-bottom: 1px solid ${profileHomeBorder};
  }

  .profile-image-inner-inner{
    background: ${() =>
      setThemeVars(theme.bgSubColorLight, theme.bgSubColorDark)}
  }

  .profile-texts {
    h4, p, p > a {
      color: ${() => setThemeVars(theme.subColor, "#dbdbdb")};
    }
  }

  .icon-fa {
    margin: 0 0.3rem;
  }

  .post-bg-color {
    background: ${() =>
      setThemeVars(theme.bgSubColorLight, theme.bgSubColorDark)}
  }

  .img-not-gatsby-remark {
    max-width: 100%;
    display:block;
    margin: 0.35rem auto !important;
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
      color: ${() => setThemeVars(theme.subColor, theme.midGreyColor)};
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

      background: ${() => setThemeVars("#f5f5f5", "#232227")};
      border-left: 3px solid ${() => setThemeVars("#bbb", "#444")};
      border-right: 3px solid ${() => setThemeVars("#bbb", "#444")};
      border-top: 1px solid ${() => setThemeVars("#eee", "#333")};
      border-bottom: 1px solid ${() => setThemeVars("#eee", "#333")};
      color: ${() => setThemeVars("#888", "#eee")}
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

  .icon-hand-ptr {
    color: ${() => setThemeVars("#111", "#fff")}
  }

  .medium-zoom-overlay {
    z-index: 4;
  }
  .medium-zoom-image--opened {
    z-index: 5;
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

// Code block stylings based on main theme
const bgColor = () => setThemeVars("#eee", "#2d323e")
const bgColorBorder = () => setThemeVars("#ddd", "#51566d")
const base0 = () => setThemeVars("#111", "#fafafa")
const base1 = () => setThemeVars("#352983", "#fa69e5")
const base2 = () => setThemeVars("#a93232", "#63fa83")
const base3 = () => setThemeVars("#666a4e", "#f5ff98")
const base4 = () => setThemeVars("#112b63", "#6ad7f9")
const base5 = () => setThemeVars("#5b581a", "#d2ceab")
const base6 = () => setThemeVars("#327b41", "#e48080")
const base99 = () => setThemeVars("#248537", "#63fa83") // Token inserted
const base98 = () => setThemeVars("#8e3232", "#e48080") // Token deleted
const inline = () => setThemeVars("#eee", "#464457")
const highlight = () => setThemeVars("#dedede", "#374666")

let codeBlockStyles = createGlobalStyle`
    code[class*="language-"],
    pre[class*="language-"] {
      font-family: ${config.fontCodeBlocks + config.fontsBackUp};
      white-space: ${config.breakCodeLines ? "pre-wrap" : "pre"}
    }

    /* Inline code block */
    h1, h2, h3, h4, h5, h6, p, span, li, strong, em {
      > code[class*="language-"] {
        background: ${inline};
        color: ${foregroundColor}
      }
    }

    pre[class*="language-"]::before {
      font-family: ${config.fontMain}
    }
`

if (config.useLightCodeBlock) {
  // Light theme code blocks
  codeBlockStyles = createGlobalStyle`
    .gatsby-highlight {
      background: ${bgColor};
      border-left: 2px solid ${bgColorBorder};
    }
    
    .gatsby-highlight-code-line {
      background-color: ${highlight};
    }

    code[class*="language-"],
    pre[class*="language-"] {
      font-family: ${config.fontCodeBlocks + config.fontsBackUp};
      color: ${base0};
      white-space: ${config.breakCodeLines ? "pre-wrap" : "pre"}
    }
    .token.class-name {
      color: ${base0};
    }

    .token.atrule,
    .token.keyword {
      color: ${base1};
    }

    .token.selector,
    .token.string,
    .token.char,
    .token.builtin,
    .token.url,
    .token.number,
    .token.attr-value {
      color: ${base2};
    }

    .token.inserted {
      color: ${base99};
    }
    .token.deleted {
      color: ${base98};
    }
    .token.attr-name {
      color: ${base3};
    }
    .token.function {
      color: ${base4};
    }
    .token.punctuation {
      color: ${base5};
    }
    .token.tag,
    .token.boolean,
    .token.constant,
    .token.symbol {
      color: ${base6};
    }

    /* Inline code block */
    h1, h2, h3, h4, h5, h6, p, span, li, strong, em {
      > code[class*="language-"] {
        background: ${inline};
      }
    }

    pre[class*="language-"]::before {
      font-family: ${config.fontMain}
    }
  `
}

export default codeBlockStyles
