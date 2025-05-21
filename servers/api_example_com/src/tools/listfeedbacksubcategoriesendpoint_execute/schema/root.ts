import { z } from "zod"

export const inputParamsSchema = {
  "categoryId": z.number().describe("Category ID").optional(),
  "forEvaluation": z.string().describe("Is the subcategory for evaluation?").optional()
}