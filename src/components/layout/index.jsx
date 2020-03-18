import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { config } from "@fortawesome/fontawesome-svg-core"
import Header from "../header"
import { GlobalStyles, theme } from "../shared/styles-global"
import CodeBlockStyles from "../shared/styles-global.js"
import { ThemeProvider } from "styled-components"
import UseTheme from "./use-theme"
import Footer from "../footer"
import ScrollTopButton from "../scroll-top-button"
import "@fortawesome/fontawesome-svg-core/styles.css"
import styled from "styled-components"

config.autoAddCss = false

const Layout = ({ children, showTitle, isPostTemplate }) => {
  const setTheme = UseTheme()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const childrenElement = (
    <>
      <GlobalStyles />
      <CodeBlockStyles />
      <Header siteTitle={data.site.siteMetadata.title} showTitle={showTitle} />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <ScrollTopButton scrollStepInPx="150" delayInMs="5" />
    </>
  )

  return (
    // Used to set theme
    <ThemeProvider theme={setTheme}>
      {/* Used for global variables */}
      <ThemeProvider theme={theme}>
        {isPostTemplate ? (
          <div className="post-bg-color">{childrenElement}</div>
        ) : (
          <>{childrenElement}</>
        )}
      </ThemeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const StyledMain = styled.main`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.maxWidthSite};
`
