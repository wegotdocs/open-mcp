import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "id": z.string(),
  "message_id": z.string().describe("ID of the message from where the channel is marked unread").optional(),
  "thread_id": z.string().describe("Mark a thread unread, specify both the thread and message id").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}