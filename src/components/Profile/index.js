import React from "react"
import styled from "styled-components"
import ProfileTexts from "./ProfileTexts"
import ProfileImg from "./ProfileImg"
import { fontProfile, fontsBackUp } from "../../../customize-styles"

const Profile = ({ home }) => {
  return (
    <>
      {home ? (
        <StyledProfileHome className="profile-home">
          <ProfileImg />
          <ProfileTexts home />
        </StyledProfileHome>
      ) : (
        <StyledProfile className="profile">
          <ProfileImg />
          <ProfileTexts />
        </StyledProfile>
      )}
    </>
  )
}

export default Profile

const StyledProfile = styled.div`
  font-family: ${fontProfile + fontsBackUp};
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.5rem 0.5rem 0.5rem;
`
const StyledProfileHome = styled.div`
  font-family: ${fontProfile + fontsBackUp};
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 3rem;
  @media (max-width: 500px) {
    padding: 0rem 0.5rem;
  }
`
