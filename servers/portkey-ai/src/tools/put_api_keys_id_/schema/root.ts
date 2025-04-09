import { z } from "zod"

export const inputParams = {
  "id": z.string().uuid(),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "rate_limits": z.array(z.object({ "type": z.string().optional(), "unit": z.string().optional(), "value": z.number().int().optional() })).optional(),
  "usage_limits": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `usage_limits` to the tool, first call the tool `expandSchema` with \"/properties/usage_limits\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "scopes": z.array(z.string()).optional(),
  "defaults": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `defaults` to the tool, first call the tool `expandSchema` with \"/properties/defaults\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "alert_emails": z.array(z.string().email()).optional()
}