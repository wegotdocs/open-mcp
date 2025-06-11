import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().int().describe("Limit number of organizations to return").optional(),
  "after": z.number().int().describe("Last Organization Identifier from previous page").optional(),
  "of": z.string().describe("Organization filter").optional()
}