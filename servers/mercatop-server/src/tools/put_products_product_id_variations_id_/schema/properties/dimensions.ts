import { z } from "zod"

export const inputParamsSchema = {
  "length": z.string().describe("Variation length (cm).").optional(),
  "width": z.string().describe("Variation width (cm).").optional(),
  "height": z.string().describe("Variation height (cm).").optional()
}