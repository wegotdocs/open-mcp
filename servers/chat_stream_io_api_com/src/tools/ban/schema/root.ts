import { z } from "zod"

export const inputParamsSchema = {
  "banned_by": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `banned_by` to the tool, first call the tool `expandSchema` with \"/properties/banned_by\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User who issued a ban</property-description>").optional(),
  "banned_by_id": z.string().describe("User ID who issued a ban").optional(),
  "channel_cid": z.string().describe("Channel CID to ban user in eg. messaging:123").optional(),
  "delete_messages": z.enum(["soft","pruning","hard"]).optional(),
  "ip_ban": z.boolean().describe("Whether to perform IP ban or not").optional(),
  "reason": z.string().describe("Ban reason").optional(),
  "shadow": z.boolean().describe("Whether to perform shadow ban or not").optional(),
  "target_user_id": z.string().describe("ID of user to ban"),
  "timeout": z.number().int().describe("Timeout of ban in minutes. User will be unbanned after this period of time").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}