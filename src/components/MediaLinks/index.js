import React from "react"
import styled from "styled-components"
import MediaLink from "./MediaLink"
import { socialMediaLinks } from "../../../customize"

const MediaLinks = () => {
  return (
    <StyledMediaLinks>
      <MediaLink
        accountInfo={socialMediaLinks.email.emailAddress}
        mediaName="Email"
        preHref="mailto:"
      />
      <MediaLink
        accountInfo={socialMediaLinks.github.accountName}
        mediaName="GitHub"
        preHref="https://github.com/"
      />
      <MediaLink
        accountInfo={socialMediaLinks.facebook.accountName}
        mediaName="Facebook"
        preHref="https://www.facebook.com/"
      />
      <MediaLink
        accountInfo={socialMediaLinks.instagram.accountName}
        mediaName="Instagram"
        preHref="https://instagram.com/"
      />
      <MediaLink
        accountInfo={socialMediaLinks.twitter.accountName}
        mediaName="Twitter"
        preHref="https://twitter.com/"
      />
      <MediaLink
        accountInfo={socialMediaLinks.linkedIn.accountName}
        mediaName="LinkedIn"
        preHref="https://linkedin.com/"
      />
      <MediaLink
        accountInfo={socialMediaLinks.medium.accountName}
        mediaName="Medium"
        preHref="https://medium.com/@"
      />
    </StyledMediaLinks>
  )
}

export default MediaLinks

const StyledMediaLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  a {
    color: steelblue;
    margin: 0 0.2rem;
    font-size: 0.8rem;
  }
`
