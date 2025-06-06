import { z } from "zod"

export const inputParamsSchema = {
  "product_id": z.number().int().describe("Unique identifier for the variable product."),
  "id": z.number().int().describe("Unique identifier for the variation."),
  "force": z.boolean().describe("Whether to bypass trash and force deletion.").optional()
}