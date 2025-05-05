import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "title": z.string().optional(),
  "group": z.string().optional(),
  "description": z.string().max(1048576).optional(),
  "definition": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `definition` to the tool, first call the tool `expandSchema` with \"/properties/definition\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "version": z.number().int().optional()
}