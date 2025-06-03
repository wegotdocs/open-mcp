import { z } from "zod"

export const inputParamsSchema = {
  "poll_id": z.string().max(255).describe("Poll ID"),
  "set": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `set` to the tool, first call the tool `expandSchema` with \"/properties/set\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Sets new field values</property-description>").optional(),
  "unset": z.array(z.string()).describe("Array of field names to unset").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}