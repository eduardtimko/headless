import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
  sizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
  },
  colors: {
    primary: "blue",
    secondary: "aqua",
  },
  padding: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  sectionPadding: {
    desktop: "90px",
    mobile: "40px",
  },
  font: {
    body: "Arial",
  },
})
