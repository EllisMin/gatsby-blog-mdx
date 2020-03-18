import React from "react"
import styled from "styled-components"
import config from "../../../dmin-config"

const Footer = () => {
  return (
    <StyledFooter className="main-footer">
      <span>© {new Date().getFullYear()} </span>
      <StyledA
        href={config.footerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {config.author}
      </StyledA>
      , Built with
      {` `}
      <StyledA
        href="https://github.com/EllisMin/gatsby-minimalistic-dmin"
        target="_blank"
        rel="noopener noreferrer"
      >
        gatsby-minimalistic-dmin
      </StyledA>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: block;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
`
const StyledA = styled.a``
