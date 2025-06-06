import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name for the resource.").optional(),
  "slug": z.string().describe("An alphanumeric identifier for the resource unique to its type.").optional(),
  "parent": z.number().int().describe("The ID for the parent of the resource.").optional(),
  "description": z.string().describe("HTML description of the resource.").optional(),
  "display": z.enum(["default","products","subcategories","both"]).describe("Category archive display type.").optional(),
  "image": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `image` to the tool, first call the tool `expandSchema` with \"/properties/image\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Image data.</property-description>").optional(),
  "menu_order": z.number().int().describe("Menu order, used to custom sort the resource.").optional()
}