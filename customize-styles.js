/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */

// You can use color picker: https://www.color-hex.com/
const styleConfig = {
  /* Fonts
    ========================================= */
  fontMain: `'IBM Plex Sans'`,                // Main Font
  fontProfile: `'Oxanium'`,                   // Font inside profile
  fontCodeBlocks: `Menlo, Monaco, monospace`, // Font for code blocks

  // These fonts will be used if above fonts are unavailable
  fontsBackUp: `, sans-serif, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'`,

  /* Colors for each Light / Dark Theme
    ========================================= */
  headerColorLight: "#eee",
  headerColorDark: "#252427",

  bgColorLight: "#fff",
  bgColorDark: "#292a30",

  /* background colors surrounding profile & posts in main page */
  bgSubColorLight: "#f7f7f7",
  bgSubColorDark: "#26272e",

  /* Font Colors */
  fontColorLight: "#313131",
  fontSubColorLight: "#808080",

  fontColorDark: "#d3d3dc",
  fontSubColorDark: "#a1a1a5",

  /* Scrollbar Colors */
  scrollbarColorLight: "#ccc",
  scrollbarColorDark: "#747d92",

  scrollbarBgLight: "#eff1f4",
  scrollbarBgDark: "#2e3039",

  scrollbarHoverLight: "#bbb",
  scrollbarHoverDark: "#818ca4",

  /* Underline Color */
  underlineColorLight: "#8807ff",
  underlineColorDark: "#f2c033",

  /* Scroll Progress Bar Color */
  progressBarColorLight: "#8b8ed3",
  progressBarColorDark: "#838da4",

  /* To customize code blocks, modify /src/components/Code/styles/* */
}

module.exports = styleConfig
