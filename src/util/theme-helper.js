import { theme } from "../components/shared/styles-global"

// Sets variables for light and dark theme
export const setThemeVars = (lightVar, darkVar) => {
  return theme.curTheme === "light" ? lightVar : darkVar
}
