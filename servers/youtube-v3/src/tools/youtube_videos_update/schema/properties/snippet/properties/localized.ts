import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().describe("Localized version of the video's description.").optional(),
  "title": z.string().describe("Localized version of the video's title.").optional()
}