import React from "react"
import TextBlock from "../index"

const Danger = ({ children, padding }) => {
  return <TextBlock theme="danger" children={children} padding={padding} />
}

export default Danger
