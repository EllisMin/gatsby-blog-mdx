import React from "react"

import "./styles.scss"

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button className={`${className || ""} btn-custom`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
