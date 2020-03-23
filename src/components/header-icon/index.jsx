import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderIcon = ({ accountInfo, mediaName, preHref, icon }) => {
  const [err, setErr] = useState(false)
  const accountName = accountInfo.accountName
    ? accountInfo.accountName
    : accountInfo.emailAddress

  useEffect(() => {
    if (!accountName) {
      setErr(true)
      console.log(
        "HeaderIcon: accountInfo must contain either accountName or emailAddress"
      )
    }
  }, [err])

  return (
    <>
      {accountName && accountName && accountInfo.showHeaderIcon && !err ? (
        <a
          className="icon-fa-link"
          href={`${preHref}${accountName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={`icon-${mediaName} icon-fa`}
            icon={icon}
          />
        </a>
      ) : null}
    </>
  )
}

HeaderIcon.propTypes = {
  accountInfo: PropTypes.object.isRequired,
  mediaName: PropTypes.string,
  preHref: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}

export default HeaderIcon
