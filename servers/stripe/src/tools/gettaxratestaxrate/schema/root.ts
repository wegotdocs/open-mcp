import { z } from "zod"

export const inputParamsSchema = {
  "tax_rate": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}