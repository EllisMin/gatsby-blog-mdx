import React from "react"
import styled, { keyframes } from "styled-components"
import { theme } from "../Shared/styles-global"

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${theme.lightGreyColor};
    border-radius: 50%;
    border-color: ${theme.lightGreyColor} transparent transparent transparent;
    animation: ${loader} 1200ms cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    animation-delay: -450ms;
  }
  & div:nth-child(2) {
    animation-delay: -300ms;
  }
  & div:nth-child(3) {
    animation-delay: -150ms;
  }
`

const Loader = () => {
  return (
    <StyledLoader>
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  )
}

export default Loader
