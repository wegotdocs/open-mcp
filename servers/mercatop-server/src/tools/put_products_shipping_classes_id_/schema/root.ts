import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "name": z.string().describe("Shipping class name.").optional(),
  "slug": z.string().describe("An alphanumeric identifier for the resource unique to its type.").optional(),
  "description": z.string().describe("HTML description of the resource.").optional()
}