import { z } from "zod"

export const inputParamsSchema = {
  "tag": z.string(),
  "text": z.string(),
  "type": z.enum(["square","medium","small","xsmall"]).optional(),
  "filter": z.enum(["mono","negate","custom"]).optional(),
  "fit": z.enum(["cover","contain","fill","inside","outside"]).optional(),
  "position": z.enum(["top","right top","right","right bottom","bottom","left bottom","left","left top","center"]).optional(),
  "width": z.number().optional(),
  "height": z.number().optional(),
  "blur": z.number().optional(),
  "r": z.number().describe("With custom filter, define red value between 0 and 255").optional(),
  "g": z.number().describe("With custom filter, define green value between 0 and 255").optional(),
  "b": z.number().describe("With custom filter, define blue value between 0 and 255").optional(),
  "brightness": z.number().describe("With custom filter, define brightness").optional(),
  "saturation": z.number().describe("With custom filter, define saturation").optional(),
  "hue": z.number().describe("With custom filter, define hue").optional(),
  "lightness": z.number().describe("With custom filter, define lightness").optional(),
  "html": z.boolean().optional(),
  "json": z.boolean().optional(),
  "font": z.enum(["Andale Mono","Impact","Arial","Arial Black","Comic Sans MS","Courier New","Georgia","Times New Roman","Verdana","Webdings"]).optional(),
  "fontSize": z.number().optional(),
  "fontColor": z.string().optional(),
  "fontBackground": z.string().optional()
}