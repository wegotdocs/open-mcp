import { z } from "zod"

export const inputParamsSchema = {
  "filter_conditions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `filter_conditions` to the tool, first call the tool `expandSchema` with \"/properties/filter_conditions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "limit": z.number().int().describe("Number of channels to limit").optional(),
  "member_limit": z.number().int().gte(0).lte(100).describe("Number of members to limit").optional(),
  "message_limit": z.number().int().gte(0).describe("Number of messages to limit").optional(),
  "offset": z.number().int().describe("Channel pagination offset").optional(),
  "sort": z.array(z.object({ "direction": z.number().int().describe("Direction of sorting, 1 for Ascending, -1 for Descending, default is 1").optional(), "field": z.string().describe("Name of field to sort by").optional() }).nullable()).describe("List of sort parameters").optional(),
  "state": z.boolean().describe("Whether to update channel state or not").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}