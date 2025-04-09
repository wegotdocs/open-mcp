import { z } from "zod"

export const inputParams = {
  "id": z.number().int(),
  "description": z.string().describe("The description of the project category.").optional(),
  "b_id": z.string().describe("The ID of the project category.").readonly().optional(),
  "name": z.string().describe("The name of the project category. Required on create, optional on update.").optional(),
  "self": z.string().url().describe("The URL of the project category.").readonly().optional()
}