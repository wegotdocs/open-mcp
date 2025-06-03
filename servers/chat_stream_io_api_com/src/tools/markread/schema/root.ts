import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "id": z.string(),
  "message_id": z.string().describe("ID of the message that is considered last read by client").optional(),
  "thread_id": z.string().describe("Optional Thread ID to specifically mark a given thread as read").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}