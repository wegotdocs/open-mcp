import { z } from "zod"

export const inputParams = {
  "teamId": z.string(),
  "enabled": z.boolean().optional(),
  "webhook_url": z.union([z.string().url(), z.null()]).optional(),
  "compression_enabled": z.boolean().optional(),
  "include_entities": z.boolean().optional(),
  "include_topics": z.boolean().optional(),
  "include_extraction": z.boolean().optional(),
  "restricted_to": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `restricted_to` to the tool, first call the tool `expandSchema` with \"/properties/restricted_to\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "blocked": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `blocked` to the tool, first call the tool `expandSchema` with \"/properties/blocked\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}