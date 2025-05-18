import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().describe("The localized strings for channel's description.").optional(),
  "title": z.string().describe("The localized strings for channel's title.").optional()
}