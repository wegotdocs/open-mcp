import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Contract type name").optional(),
  "limit": z.number().int().describe("Limit contract types").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}