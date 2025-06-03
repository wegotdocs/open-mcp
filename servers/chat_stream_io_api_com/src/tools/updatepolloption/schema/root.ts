import { z } from "zod"

export const inputParamsSchema = {
  "poll_id": z.string().max(255).describe("Poll ID"),
  "Custom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Custom` to the tool, first call the tool `expandSchema` with \"/properties/Custom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "id": z.string().max(255).describe("Option ID"),
  "text": z.string().describe("Option text"),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}