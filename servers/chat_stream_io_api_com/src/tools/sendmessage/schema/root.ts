import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().describe("Channel type to interact with"),
  "id": z.string().describe("Channel ID to interact with"),
  "force_moderation": z.boolean().optional(),
  "keep_channel_hidden": z.boolean().optional(),
  "message": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `message` to the tool, first call the tool `expandSchema` with \"/properties/message\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "pending": z.boolean().optional(),
  "pending_message_metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pending_message_metadata` to the tool, first call the tool `expandSchema` with \"/properties/pending_message_metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "skip_enrich_url": z.boolean().optional(),
  "skip_push": z.boolean().optional()
}