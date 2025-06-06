import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "attribute_id": z.number().int().describe("Unique identifier for the attribute of the terms."),
  "name": z.string().describe("Term name.").optional(),
  "slug": z.string().describe("An alphanumeric identifier for the resource unique to its type.").optional(),
  "description": z.string().describe("HTML description of the resource.").optional(),
  "menu_order": z.number().int().describe("Menu order, used to custom sort the resource.").optional()
}