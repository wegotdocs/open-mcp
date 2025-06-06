import { z } from "zod"

export const inputParamsSchema = {
  "product_id": z.number().int().describe("Unique identifier for the variable product."),
  "id": z.number().int().describe("Unique identifier for the variation."),
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional()
}