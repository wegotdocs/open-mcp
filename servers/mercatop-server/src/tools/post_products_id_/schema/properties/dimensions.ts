import { z } from "zod"

export const inputParamsSchema = {
  "length": z.string().describe("Product length (cm).").optional(),
  "width": z.string().describe("Product width (cm).").optional(),
  "height": z.string().describe("Product height (cm).").optional()
}