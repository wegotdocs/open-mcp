import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(5000).describe("The ID of the product_feature."),
  "product": z.string().max(5000).describe("The ID of the product."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}