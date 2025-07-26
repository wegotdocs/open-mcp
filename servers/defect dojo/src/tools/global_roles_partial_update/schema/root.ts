import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this global_ role."),
  "user": z.number().int().nullable().optional(),
  "group": z.number().int().nullable().optional(),
  "role": z.number().int().nullable().describe("The global role will be applied to all product types and products.").optional()
}