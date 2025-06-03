import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Message ID"),
  "form_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `form_data` to the tool, first call the tool `expandSchema` with \"/properties/form_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>ReadOnlyData to execute command with</property-description>"),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}