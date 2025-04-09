import { z } from "zod"

export const inputParams = {
  "slug": z.string(),
  "name": z.string().optional(),
  "key": z.string().optional(),
  "note": z.string().nullable().optional(),
  "deploymentConfig": z.array(z.object({ "apiVersion": z.string(), "alias": z.string().optional(), "is_default": z.boolean().optional(), "deploymentName": z.string() })).optional(),
  "usage_limits": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `usage_limits` to the tool, first call the tool `expandSchema` with \"/properties/usage_limits\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}