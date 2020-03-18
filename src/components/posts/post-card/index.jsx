import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { setThemeVars } from "../../../util/theme-helper"
import { theme } from "../../shared/styles-global"
import config from "../../../../dmin-config.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

const PostCard = ({ id, title, date, path, excerpt, timeToRead }) => {
  return (
    <>
      <Link to={path}>
        <StyledPostCard key={id}>
          <h3>{title}</h3>
          {config.showTimeToRead && (
            <span>
              <FontAwesomeIcon
                className="icon-clock"
                icon={faClock}
                size="xs"
              />
              {timeToRead} minute read
            </span>
          )}
          <p>{excerpt}</p>
        </StyledPostCard>
      </Link>
    </>
  )
}

export default PostCard

const StyledPostCard = styled.div`
  cursor: pointer;
  padding: 1rem;
  margin: 0.5rem 0;
  transition: none;

  &:hover {
    background: ${() => setThemeVars(theme.bgColorLight, theme.darkerColor)};
  }
  span {
    font-size: 0.8rem;
    .icon-clock {
      margin: 0 0.1rem;
    }
  }
  p {
    margin-top: 0.3rem;
    color: ${() => setThemeVars(theme.subColor, theme.midGreyColor)};
  }
`
