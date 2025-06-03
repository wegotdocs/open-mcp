import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Message ID to send reaction for"),
  "enforce_unique": z.boolean().describe("Whether to replace all existing user reactions").optional(),
  "reaction": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `reaction` to the tool, first call the tool `expandSchema` with \"/properties/reaction\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Represents user reaction to a message</property-description>"),
  "skip_push": z.boolean().describe("Skips any mobile push notifications").optional()
}