import { z } from "zod"

export const inputParamsSchema = {
  "length": z.string().describe("Product length.").optional(),
  "width": z.string().describe("Product width.").optional(),
  "height": z.string().describe("Product height.").optional()
}