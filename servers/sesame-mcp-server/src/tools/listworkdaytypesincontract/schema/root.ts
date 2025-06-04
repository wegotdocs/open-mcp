import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Find workday type by name").optional(),
  "limit": z.number().int().describe("Limit workday types").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}