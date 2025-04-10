import { z } from "zod"

export const inputParams = {
  "team": z.string().describe("The ID of the team"),
  "name": z.string().max(255),
  "type": z.string().max(50).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "is_private": z.boolean().optional(),
  "webhook_url": z.union([z.string().url(), z.null()]).optional(),
  "webhook_active": z.boolean().optional(),
  "item": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `item` to the tool, first call the tool `expandSchema` with \"/properties/item\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}