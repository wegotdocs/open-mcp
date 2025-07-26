import { z } from "zod"

export const inputParamsSchema = {
  "user": z.number().int().nullable().optional(),
  "group": z.number().int().nullable().optional(),
  "role": z.number().int().nullable().describe("The global role will be applied to all product types and products.").optional()
}