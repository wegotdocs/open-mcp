import { z } from "zod"

export const inputParamsSchema = {
  "values": z.array(z.string().describe("Text values")).min(0).max(20).describe("Text values").optional(),
  "condition": z.enum(["CONTAINS","NOT_CONTAINS"]).describe("Text condition").optional(),
  "include": z.enum(["ALL","ANY"]).describe("Text include").optional()
}