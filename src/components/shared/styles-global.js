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
  fontColorLight: config.fontColorLight,
  fontSubColorLight: config.fontSubColorLight,
  fontColorDark: config.fontColorDark,
  fontSubColorDark: config.fontSubColorDark,
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
  setThemeVars(theme.fontColorLight, theme.fontColorDark)

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
    background: ${() =>
      setThemeVars(theme.bgSubColorLight, theme.bgSubColorDark)}
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
const bgColor = () => setThemeVars("#f6f8fa", "#2d323e")
const bgColorBorder = () => setThemeVars("#e8e6ef", "#43485f")
const base0 = () => setThemeVars("#000", "#ddd")
const base1 = () => setThemeVars("#d73a49", "#fa69e5")
const base2 = () => setThemeVars("#032f62", "#63fa83")
const base3 = () => setThemeVars("#6f42c0", "#f5ff98")
const base4 = () => setThemeVars("#005cc5", "#6ad7f9")
const base5 = () => setThemeVars("#5b581a", "#d2ceab")
const base6 = () => setThemeVars("#22863a", "#e48080")
const base99 = () => setThemeVars("#248537", "#63fa83") // Token inserted
const base98 = () => setThemeVars("#8e3232", "#e48080") // Token deleted
const inlineBg = () => setThemeVars("#f1f1f1", "#3b3948")
const inlineColor = () => setThemeVars("#de498d", "#ca6c9a")
const highlight = () => setThemeVars("#e7e8ec", "#353e50")
const selectionColor = () => setThemeVars("#ccf1fb", "#073642")
// Copy Button Colors
const copyBtnBg = () => setThemeVars("#efefef", "#3b3d46")
const copyBtnColor = () => setThemeVars("#9c9c9c", "#888598")
const copyBtnColorHover = () => setThemeVars("#111", "#b7b5bf")

let codeBlockStyles = createGlobalStyle`
    code[class*="language-"],
    pre[class*="language-"],
    .code-title-custom {
      font-family: ${config.fontCodeBlocks + config.fontsBackUp};
      white-space: ${config.breakCodeLines ? "pre-wrap" : "pre"}
    }

    /* Inline code block */
    :not(pre) > code[class*="language-"] {
      background: ${inlineBg};
      color: ${inlineColor}
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
      border: 1px solid ${bgColorBorder};
    }
    
    .gatsby-highlight-code-line {
      background-color: ${highlight};
    }

    code[class*="language-"],
    pre[class*="language-"],
    .code-title-custom {
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
    :not(pre) > code[class*="language-"] {
      background: ${inlineBg};
      color: ${inlineColor};
    }

    pre[class*="language-"]::before {
      font-family: ${config.fontMain}
    }

    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"] ::-moz-selection {
      background: ${selectionColor};
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"] ::selection,
    code[class*="language-"]::selection,
    code[class*="language-"] ::selection {
      background: ${selectionColor};
    }

    .btn-copy {
      background: ${copyBtnBg};
      color: ${copyBtnColor};
      &:hover {
        color: ${copyBtnColorHover}
      }
    }

    .code-title-custom {
      background: ${bgColor};
      border-top: 1px solid ${bgColorBorder};
      border-right: 1px solid ${bgColorBorder};
      border-left: 1px solid ${bgColorBorder};
      border-bottom: none;
    }

  @media (max-width: 680px) {
    html {
      font-size: 90%;
    }
  }

  @media (max-width: 500px) {
    html {
      font-size: 83%;
    }
  }
  `
}

export default codeBlockStyles
