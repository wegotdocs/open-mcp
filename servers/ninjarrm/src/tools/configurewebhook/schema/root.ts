import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().describe("Callback (WebHook) URL for activity notifications").optional(),
  "activities": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `activities` to the tool, first call the tool `expandSchema` with \"/properties/activities\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Activity filter</property-description>").optional(),
  "expand": z.array(z.string().describe("Which references to expand in payloads")).describe("Which references to expand in payloads").optional(),
  "headers": z.array(z.object({ "name": z.string().describe("Header name").optional(), "value": z.string().describe("Header value").optional() }).describe("Custom HTTP Headers (i.e. Authorization)")).describe("Custom HTTP Headers (i.e. Authorization)").optional()
}