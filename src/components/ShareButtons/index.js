import React from "react"
import config from "../../../customize"
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share"

import "./styles.scss"

const ShareButtons = ({ location }) => {
  return (
    <div className="share-buttons-wrap">
      {config.shareButtons.email && (
        <EmailShareButton url={location}>
          <EmailIcon round size={32} />
        </EmailShareButton>
      )}
      {config.shareButtons.facebook && (
        <FacebookShareButton url={location}>
          <FacebookIcon round size={32} />
        </FacebookShareButton>
      )}
      {config.shareButtons.twitter && (
        <TwitterShareButton url={location}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>
      )}
      {config.shareButtons.reddit && (
        <RedditShareButton url={location}>
          <RedditIcon round size={32} />
        </RedditShareButton>
      )}
      {config.shareButtons.linkedIn && (
        <LinkedinShareButton url={location}>
          <LinkedinIcon round size={32} />
        </LinkedinShareButton>
      )}
    </div>
  )
}

export default ShareButtons
