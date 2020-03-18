import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { withTheme } from "styled-components"

import config from "../../../dmin-config"

const Header = ({ siteTitle, showTitle }) => {
  return (
    <StyledMainHeader className="main-header">
      {/* Google AdSense */}
      <script
        data-ad-client={config.googleAdSenseId}
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <StyledMainHeaderInner className="main-header-inner">
        <h1 style={{ fontSize: "1.5rem" }}>
          {showTitle && <Link to="/">{`${siteTitle}`}</Link>}
        </h1>
        <StyledMediaIcons>
          {config.socialMediaLinks.email.emailAddress &&
            config.socialMediaLinks.email.emailAddress !== "" &&
            config.socialMediaLinks.email.showHeaderIcon && (
              <a
                href={`mailto:${config.socialMediaLinks.email.emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFA className="icon-email" icon={faEnvelope} />
              </a>
            )}
          {config.socialMediaLinks.github.accountName &&
            config.socialMediaLinks.github.accountName !== "" &&
            config.socialMediaLinks.github.showHeaderIcon && (
              <a
                href={`https://github.com/${config.socialMediaLinks.github.accountName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFA className="icon-github" icon={faGithub} />
              </a>
            )}
          {config.socialMediaLinks.facebook.accountName &&
            config.socialMediaLinks.facebook.accountName !== "" &&
            config.socialMediaLinks.facebook.showHeaderIcon && (
              <a
                href={`https://facebook.com/${config.socialMediaLinks.facebook.accountName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFA className="icon-facebook" icon={faFacebook} />
              </a>
            )}
          {config.socialMediaLinks.instagram.accountName &&
            config.socialMediaLinks.instagram.accountName !== "" &&
            config.socialMediaLinks.instagram.showHeaderIcon && (
              <a
                href={`https://instagram.com/${config.socialMediaLinks.instagram.accountName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFA className="icon-instagram" icon={faInstagram} />
              </a>
            )}
          {config.socialMediaLinks.twitter.accountName &&
            config.socialMediaLinks.twitter.accountName !== "" &&
            config.socialMediaLinks.twitter.showHeaderIcon && (
              <a
                href={`https://twitter.com/${config.socialMediaLinks.twitter.accountName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFA className="icon-twitter" icon={faTwitter} />
              </a>
            )}
          {config.socialMediaLinks.linkedIn.accountName &&
            config.socialMediaLinks.linkedIn.accountName !== "" &&
            config.socialMediaLinks.linkedIn.showHeaderIcon && (
              <a
                href={`https://linkedin.com/${config.socialMediaLinks.linkedIn.accountName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFA className="icon-linkedin" icon={faLinkedin} />
              </a>
            )}
          {config.socialMediaLinks.medium.accountName &&
            config.socialMediaLinks.medium.accountName !== "" &&
            config.socialMediaLinks.medium.showHeaderIcon && (
              <a
                href={`https://medium.com/@${config.socialMediaLinks.medium.accountName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFA className="icon-medium" icon={faMedium} />
              </a>
            )}
        </StyledMediaIcons>
      </StyledMainHeaderInner>
    </StyledMainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)

const StyledMainHeader = styled.header`
  font-family: ${config.fontProfile};
  height: 55px;
  margin-bottom: 1rem;
`

const StyledMainHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidthSite};
  padding: 0.6rem;
`

const StyledFA = styled(FontAwesomeIcon)``
const StyledMediaIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  * {
    margin: 0 0.2rem;
    font-size: 1.7rem;
  }

  @media (max-width: 500px) {
    * {
      margin: 0 0.15rem;
      font-size: 1.4rem;
    }
  }
`
