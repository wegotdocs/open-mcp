import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID"),
  "comments": z.string().describe("Comments").optional(),
  "subcategoryId": z.number().describe("Subcategory ID"),
  "departmentId": z.number().describe("Department ID").optional(),
  "score": z.number().describe("Score")
}