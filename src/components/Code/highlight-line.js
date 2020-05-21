import rangeParser from "parse-numeric-range"

// Toggles true when line has // highlight-start. Turns false with // highlight-end
let highlightStart = false

const highlightClassName = "gatsby-highlight-code-line"

export const addClassName = lineProps => {
  lineProps.className = `${lineProps.className} ${highlightClassName}`
}

// Used for highlight-range{ range }
export const linesToHighlight = []

// Detects line number i.e. ```js {1-2, 5}
export const calculateLinesToHighlight = meta => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strLineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strLineNumbers)
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

// Highlight lines with "//highlight-line", "//highlight-start & //highlight-end"
export const highlightLine = (lineArray, lineProps, index) => {
  // Encountering "//highlight-start & //highlight-end" returns true to exclude line
  let shouldExclude = false

  lineArray.forEach((line, i) => {
    const content = line.content

    // Code line contains trimmed "//highlight-line"
    if (content.replace(/\s/g, "").includes("//highlight-line")) {
      // Add highlight-class
      addClassName(lineProps)
      // Remove comment
      line.content = content
        .replace("// highlight-line", "")
        .replace("//highlight-line", "")
    }

    // Stop highlighting
    if (!!highlightStart && content.replace(/\s/g, "") === "//highlight-end") {
      highlightStart = false
      shouldExclude = true
    }

    // Start highlighting after "//highlight-start"
    if (content.replace(/\s/g, "") === "//highlight-start") {
      highlightStart = true
      shouldExclude = true
    }

    // Detect "//highlight-range{number}"
    if (content.replace(/\s/g, "").includes("//highlight-range")) {
      // Obtain string inside {}
      const regExp = /\{([^)]+)\}/
      const str = regExp.exec(content)[1]
      // Get range inside {}
      const reg = /([\d,-]+)/
      if (reg.test(str)) {
        shouldExclude = true

        const strLineNumbers = reg.exec(str)[1]
        const lineNumbers = rangeParser(strLineNumbers)

        // Add line numbers to highlight + current line indexes
        lineNumbers.forEach(num => {
          linesToHighlight.push(num + index)
        })
      }
    }
  })
  // Highlight lines after //highlight-start
  if (!!highlightStart) {
    addClassName(lineProps)
  }

  return shouldExclude
}
