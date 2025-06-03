import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().max(64).describe("Channel type"),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "hide_for_creator": z.boolean().describe("Whether this channel will be hidden for the user who created the channel or not").optional(),
  "members": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `members` to the tool, first call the tool `expandSchema` with \"/properties/members\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "messages": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `messages` to the tool, first call the tool `expandSchema` with \"/properties/messages\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "state": z.boolean().describe("Refresh channel state").optional(),
  "thread_unread_counts": z.boolean().optional(),
  "watchers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `watchers` to the tool, first call the tool `expandSchema` with \"/properties/watchers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}