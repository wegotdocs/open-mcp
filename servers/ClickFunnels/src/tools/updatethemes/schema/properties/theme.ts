import { z } from "zod"

export const inputParamsSchema = {
  "custom_name": z.union([z.string().describe("A custom name to override the theme name"), z.null().describe("A custom name to override the theme name")]).describe("A custom name to override the theme name").optional(),
  "current_style_id": z.union([z.number().int().describe("The style that will be applied to the theme"), z.null().describe("The style that will be applied to the theme")]).describe("The style that will be applied to the theme").optional()
}