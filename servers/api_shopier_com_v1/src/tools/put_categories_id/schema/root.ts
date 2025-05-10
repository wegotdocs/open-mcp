import { z } from "zod"

export const inputParams = {
  "title": z.string().describe("The title of the product category.").optional(),
  "placement": z.number().int().gte(1).describe("Ranking of the product category in the shop. Accepts values in accordance with the number of categories in the shop. When an allocated  placement value is send, following placement values shift.").optional()
}