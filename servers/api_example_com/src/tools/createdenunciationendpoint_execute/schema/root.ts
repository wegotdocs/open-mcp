import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID"),
  "isAnonymous": z.boolean().describe("Is Anonymous"),
  "comment": z.string().describe("Comment"),
  "subcategoryId": z.number().describe("Subcategory ID")
}