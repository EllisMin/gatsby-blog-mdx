import React, { useState, useEffect } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { CopyToClipboard } from "react-copy-to-clipboard"
import {
  calculateLinesToHighlight,
  highlightLine,
  linesToHighlight,
  addClassName,
} from "./highlight-line"

import "./styles/main.scss"

const comments = ["//highlight-start", "//highlight-end"]
// Remote highlight comments
const removeHighlightComments = line => {
  let newStr = line
  const trimmed = line.replace(/\s/g, "")

  comments.forEach(comment => {
    if (trimmed === comment) {
      newStr = null
    }
  })

  if (trimmed.includes("//highlight-range{")) {
    newStr = null
  }

  if (newStr) {
    newStr = newStr
      .replace("//highlight-line", "")
      .replace("// highlight-line", "")
  }

  return newStr
}

const Code = ({ codeString, language, metastring, ...props }) => {
  const [copyBtnText, setCopyBtnText] = useState("Copy")
  const [copyText, setCopyText] = useState("")
  const [loadingText, setLoadingText] = useState(false)

  // Set up texts to be copied on copy button
  useEffect(() => {
    let newStr = ""
    // Remove highlight comments
    let line = ""
    for (let i = 0; i < codeString.length; i++) {
      const c = codeString.charAt(i)
      if (c === "\n") {
        const result = removeHighlightComments(line)
        if (result) {
          newStr += result
          if (i !== codeString.length - 1) {
            newStr += "\n"
          }
        }
        line = ""
      } else {
        line += c
      }
    }
    // Last line
    const result = removeHighlightComments(line)
    if (result) newStr += result
    setCopyText(newStr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Set default language to text
  if (!language) language = "text"

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={undefined}>
        <LiveEditor className="live-highlight" style={undefined} />
        <LiveError className="live-error" />
        <LivePreview className="live-preview" />
      </LiveProvider>
    )
  }

  const handleCopy = () => {
    setCopyBtnText("Copied!")
    if (!loadingText) {
      setLoadingText(true)
      setTimeout(() => {
        setCopyBtnText("Copy")
        setLoadingText(false)
      }, 4000)
    }
  }

  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={false}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <div className="gatsby-highlight" data-language={language}>
            <div className="badge-btn-wrap">
              <div className={`language-badge language-badge-${language}`}>
                {language.toUpperCase()}
              </div>
              <CopyToClipboard text={copyText} onCopy={handleCopy}>
                <button className="btn-copy">{copyBtnText}</button>
              </CopyToClipboard>
            </div>
            <pre className={className} style={style}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                const shouldExclude = highlightLine(line, lineProps, i)

                if (shouldHighlightLine(i)) {
                  addClassName(lineProps)
                }

                if (linesToHighlight.length > 0) {
                  if (linesToHighlight[0] === i) {
                    // Add class name & pop
                    addClassName(lineProps)
                    linesToHighlight.shift()
                  }
                }
                return !shouldExclude ? (
                  <div key={i} {...lineProps}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ) : null
              })}
            </pre>
          </div>
        )
      }}
    </Highlight>
  )
}

export default Code
