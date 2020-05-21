import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { enableAbout as enabled, author } from "../../../customize"

const AboutLink = () => {
  return (
    <>
      {enabled ? (
        <StyledMainCardName className="main-card-name">
          <h2>
            <Link to="/about">{author}</Link>
          </h2>
        </StyledMainCardName>
      ) : (
        <StyledMainCardNameAboutDisabled>
          <h2>{author}</h2>
        </StyledMainCardNameAboutDisabled>
      )}
    </>
  )
}

export default AboutLink

const StyledMainCardName = styled.div`
  display: inline-block;
  cursor: pointer;
  h2 {
    padding: 0.2rem 0.4rem;
  }
`

const StyledMainCardNameAboutDisabled = styled.div`
  display: inline-block;
  h2 {
    padding: 0.2rem 0rem;
  }
`
