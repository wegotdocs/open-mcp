import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID").optional(),
  "clientId": z.string().describe("Client ID").optional(),
  "categoryId": z.number().describe("Category ID").optional(),
  "subcategoryId": z.number().describe("Subcategory ID").optional(),
  "groupId": z.number().describe("Group ID").optional(),
  "createdDateString": z.string().describe("Date in string format").optional()
}