import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Message ID"),
  "message": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `message` to the tool, first call the tool `expandSchema` with \"/properties/message\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Message</property-description>"),
  "skip_enrich_url": z.boolean().describe("Skip enrich URL").optional(),
  "skip_push": z.boolean().optional()
}