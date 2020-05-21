import React from "react"
import AboutLink from "../../AboutLink"
import MediaLinks from "../../MediaLinks"
import { profileDescription } from "../../../../customize"
import ProfileLocation from "../ProfileLocation"
import styled from "styled-components"

// Renders in different layout when home is specified
const ProfileTexts = ({ home }) => {
  return (
    <>
      {home ? (
        <StyledProfileTextsHome className="profile-texts">
          <AboutLink />
          <p>{profileDescription}</p>
          <ProfileLocation />
          <MediaLinks />
        </StyledProfileTextsHome>
      ) : (
        <StyledProfileTexts className="profile-texts">
          <h4>WRITTEN BY</h4>
          <AboutLink />
          <p>{profileDescription}</p>
          <ProfileLocation />
          <MediaLinks />
        </StyledProfileTexts>
      )}
    </>
  )
}

export default ProfileTexts

const StyledProfileTexts = styled.div`
  margin: 0 1rem;
  flex: 10;
  padding: 1rem;
  h4 {
    margin: 0.3rem 0;
    font-size: 0.9rem;
  }
  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 500px) {
    p {
      margin: 0.3rem 0;
    }
  }
`
const StyledProfileTextsHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  text-align: center;
  h4 {
    margin: 0.3rem 0;
    font-size: 0.9rem;
    text-align: "center";
  }
  p {
    margin: 0.5rem 0;
    text-align: "center";
  }

  div:last-child {
    justify-content: center;
  }

  @media (max-width: 500px) {
    padding: 1rem 0.5rem;
    p {
      margin: 0.3rem 0;
    }
  }
`
