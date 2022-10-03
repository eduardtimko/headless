import { globalStyle } from "@vanilla-extract/css"
import { vars } from "./index.css"

globalStyle("html, body", {
  fontFamily: vars.font.body,
})
