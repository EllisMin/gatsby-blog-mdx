import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import "./styles.scss"

const LinkEdgePosts = ({ pageContext }) => {
  const { prev, next } = pageContext
  return prev || next ? (
    <ul className="link-edge-posts">
      {prev && (
        <Link to={prev.fields.slug} className="link-edge-post">
          <li>
            <FontAwesomeIcon
              className="icon-fa icon-chevron"
              icon={faChevronLeft}
            />
            {prev.frontmatter.title}
          </li>
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} className="link-edge-post">
          <li>
            {next.frontmatter.title}
            <FontAwesomeIcon
              className="icon-fa icon-chevron"
              icon={faChevronRight}
            />
          </li>
        </Link>
      )}
    </ul>
  ) : null
}

export default LinkEdgePosts
