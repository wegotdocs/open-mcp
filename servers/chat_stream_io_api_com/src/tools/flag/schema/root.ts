import { z } from "zod"

export const inputParamsSchema = {
  "custom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom` to the tool, first call the tool `expandSchema` with \"/properties/custom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "reason": z.string().max(255).optional(),
  "target_message_id": z.string().describe("ID of the message when reporting a message").optional(),
  "target_user_id": z.string().describe("ID of the user when reporting a user").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}