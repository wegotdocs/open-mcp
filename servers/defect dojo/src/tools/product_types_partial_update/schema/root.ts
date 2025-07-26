import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ type."),
  "name": z.string().min(1).max(255).optional(),
  "description": z.string().max(4000).nullable().optional(),
  "critical_product": z.boolean().optional(),
  "key_product": z.boolean().optional()
}