import { z } from "zod"

export const inputParamsSchema = {
  "height": z.number().int().describe("(Optional) Height of the thumbnail image.").optional(),
  "url": z.string().describe("The thumbnail image's URL.").optional(),
  "width": z.number().int().describe("(Optional) Width of the thumbnail image.").optional()
}