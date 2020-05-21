import React from "react"

import "./styles.scss"

const Underline = ({ children }) => {
  return (
    <span className="custom-underline">
      {children}
    </span>
  )
}

export default Underline
