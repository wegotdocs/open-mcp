import { z } from "zod"

export const inputParamsSchema = {
  "blocklist": z.string().optional(),
  "blocklist_behavior": z.enum(["flag","block"]).optional(),
  "commands": z.array(z.string()).describe("List of commands that channel supports").optional(),
  "grants": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `grants` to the tool, first call the tool `expandSchema` with \"/properties/data/properties/config_overrides/properties/grants\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "max_message_length": z.number().int().lte(20000).describe("Overrides max message length").optional(),
  "quotes": z.boolean().describe("Enables message quotes").optional(),
  "reactions": z.boolean().describe("Enables or disables reactions").optional(),
  "replies": z.boolean().describe("Enables message replies (threads)").optional(),
  "typing_events": z.boolean().describe("Enables or disables typing events").optional(),
  "uploads": z.boolean().describe("Enables or disables file uploads").optional(),
  "url_enrichment": z.boolean().describe("Enables or disables URL enrichment").optional()
}