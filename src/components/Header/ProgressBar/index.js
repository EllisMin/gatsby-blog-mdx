import React, { useEffect, useRef } from "react"

import "./styles.scss"

const ProgressBar = () => {
  const barRef = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    barRef.current.style.width = scrolled + "%"
  }

  return (
    <div className="progress-container">
      <div className="progress-bar" ref={barRef} />
    </div>
  )
}

export default ProgressBar
