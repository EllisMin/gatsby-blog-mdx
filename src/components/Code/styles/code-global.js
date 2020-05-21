/* Code block stylings based on main theme */
import { createGlobalStyle } from "styled-components"
import { setThemeVars } from "../../../util/theme-helper"
import config from "../../../../customize"
import configStyles from "../../../../customize-styles"

const bgColor = () => setThemeVars("#f6f8fa !important", "#2d323e !important")
const bgColorBorder = () =>
  setThemeVars("#e8e6ef !important", "#43485f !important")
const base0 = () => setThemeVars("#000 !important", "#ddd !important")
const base1 = () => setThemeVars("#d73a49 !important", "#fa69e5 !important")
const base2 = () => setThemeVars("#220b83 !important", "#63fa83 !important")
const base3 = () => setThemeVars("#6f42c0 !important", "#f5ff98 !important")
const base4 = () => setThemeVars("#005cc5 !important", "#6ad7f9 !important")
const base5 = () => setThemeVars("#5b581a !important", "#d2ceab !important")
const base6 = () => setThemeVars("#22863a !important", "#e48080 !important")
const base7 = () => setThemeVars("#22863a !important", "#e48080 !important")
const base99 = () => setThemeVars("#248537 !important", "#63fa83 !important") // Token inserted
const base98 = () => setThemeVars("#8e3232 !important", "#e48080 !important") // Token deleted
const inlineBg = () => setThemeVars("#f1f1f1 !important", "#3b3948 !important")
const inlineColor = () =>
  setThemeVars("#de498d !important", "#ca6c9a !important")
const highlight = () => setThemeVars("#e7e8ec !important", "#353e50 !important")
const selectionColor = () =>
  setThemeVars("#ccf1fb !important", "#073642 !important")
// Copy Button Colors
const copyBtnBg = () => setThemeVars("#efefef !important", "#3b3d46 !important")
const copyBtnColor = () =>
  setThemeVars("#9c9c9c !important", "#888598 !important")
const copyBtnColorHover = () =>
  setThemeVars("#111 !important", "#b7b5bf !important")
const fontColor = () =>
  setThemeVars(
    `${configStyles.fontColorLight} !important`,
    `${configStyles.fontColorDark} !important`
  )

// Code block styling for light/dark theme
const codeBlockStyles = createGlobalStyle`
    .gatsby-highlight, .live-highlight, .live-preview, .live-error {
      background: ${bgColor};
      border: 1px solid ${bgColorBorder};
    }

    .live-highlight, .live-preview {
      &:before {
       font-family: ${configStyles.fontCodeBlocks + configStyles.fontsBackUp}
      }
    }
    
    .gatsby-highlight-code-line {
      background-color: ${highlight};
    }

    code[class*="language-"],
    pre[class*="language-"],
    .code-title-custom, .live-error {
      font-family: ${configStyles.fontCodeBlocks + configStyles.fontsBackUp} !important;
      color: ${base0};
      white-space: ${config.breakCodeLines ? "pre-wrap" : "pre"}
    }

    ${"" /* Language badge & copy button font */}
    .language-badge, .btn-copy {
      font-family: ${configStyles.fontCodeBlocks + configStyles.fontsBackUp};
      font-size: 0.7rem;
    }

    ${
      "" /* Need to have less precedence since most other tags have .token.tag */
    }
    .token.tag {
      color: ${base6};
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

    .token.boolean,
    .token.constant,
    .token.symbol {
      color: ${base6};
    }

    .token.property {
      color: ${base7};
    }

    .token.maybe-class-name, .token.operator, .token.plain, .token-parameter  {
      color: ${fontColor};
    }
    
    /* Inline code block */
    code {
      background: ${inlineBg};
      color: ${inlineColor};
      font-family: ${configStyles.fontCodeBlocks + configStyles.fontsBackUp};
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
      color: ${copyBtnColor};
      &:hover {
        background: ${copyBtnBg};
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
      font-size: 85%;
    }
  }
  `

export default codeBlockStyles
