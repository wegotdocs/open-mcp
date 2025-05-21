import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "categoryId": z.number().describe("Category ID").optional(),
  "subcategoryId": z.number().describe("Subcategory ID").optional(),
  "userId": z.string().describe("User ID").optional(),
  "departmentId": z.number().describe("Department ID").optional(),
  "forEvaluation": z.string().describe("Is the feedback for evaluation?").optional(),
  "groupId": z.number().describe("Group ID").optional()
}