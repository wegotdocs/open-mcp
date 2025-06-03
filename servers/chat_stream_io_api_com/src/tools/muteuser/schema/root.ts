import { z } from "zod"

export const inputParamsSchema = {
  "target_ids": z.array(z.string()).describe("User IDs to mute (if multiple users)").optional(),
  "timeout": z.number().int().gte(0).describe("Duration of mute in minutes"),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}