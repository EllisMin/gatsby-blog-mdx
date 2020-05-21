import React from "react"
import TextBlock from "../index"

const Warning = ({ children, padding }) => {
  return <TextBlock theme="warning" children={children} padding={padding} />
}

export default Warning
