import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "id": z.string(),
  "hard_delete": z.boolean().describe("Permanently delete channel data (messages, reactions, etc.)").optional(),
  "member_ids": z.array(z.string()).describe("List of member IDs to hide message history for. If empty, truncates the channel for all members").optional(),
  "message": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `message` to the tool, first call the tool `expandSchema` with \"/properties/message\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "skip_push": z.boolean().describe("When `message` is set disables all push notifications for it").optional(),
  "truncated_at": z.string().datetime({ offset: true }).describe("Truncate channel data up to `truncated_at`. The system message (if provided) creation time is always greater than `truncated_at`").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}