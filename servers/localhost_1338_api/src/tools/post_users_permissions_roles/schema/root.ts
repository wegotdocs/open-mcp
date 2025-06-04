import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "description": z.string().optional(),
  "type": z.string().optional(),
  "permissions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `permissions` to the tool, first call the tool `expandSchema` with \"/properties/permissions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}