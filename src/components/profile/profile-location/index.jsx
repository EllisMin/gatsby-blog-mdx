import React from "react"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { location } from "../../../../dmin-config"
import styled from "styled-components"

const ProfileLocation = () => {
  return location ? (
    <StyledTextsLocation className="profile-texts-location">
      <a
        href={`https://www.google.com/maps/search/${location}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon-fa" icon={faMapMarkerAlt} />
        {location}
      </a>
    </StyledTextsLocation>
  ) : null
}

export default ProfileLocation

const StyledTextsLocation = styled.p`
  font-size: 0.85rem;
  .icon-fa {
      font-size: 0.8rem;
  }
`
