import { useState, useEffect } from "react"
import storage from "local-storage-fallback"
import config from "../../customize"
import { theme as globalTheme } from "../components/Shared/styles-global"

function UseTheme(defaultTheme = { mode: config.defaultTheme }) {
  const [theme, _setTheme] = useState(getInitialTheme)

  // Get theme from local storage
  function getInitialTheme() {
    const savedTheme = storage.getItem("theme")
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme
  }

  // Store theme in local storage
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  // Save to theme global variable
  globalTheme.curTheme = theme.mode

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  }
}
export default UseTheme
