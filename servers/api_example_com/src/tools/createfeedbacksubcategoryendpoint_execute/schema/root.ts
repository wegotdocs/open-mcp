import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the feedback subcategory"),
  "categoryId": z.number().describe("ID of the parent category"),
  "forEvaluation": z.boolean().describe("Is the subcategory for evaluation?")
}