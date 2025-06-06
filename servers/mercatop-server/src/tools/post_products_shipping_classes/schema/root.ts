import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name for the resource.").optional(),
  "slug": z.string().describe("An alphanumeric identifier for the resource unique to its type.").optional(),
  "description": z.string().describe("HTML description of the resource.").optional()
}