import { z } from "zod"

export const inputParamsSchema = {
  "websiteId": z.string().describe("The Website ID"),
  "currency": z.string().describe("Currency (three letter code)"),
  "amount": z.number().describe("The amount to authorize").optional(),
  "redirectURLs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `redirectURLs` to the tool, first call the tool `expandSchema` with \"/properties/redirectURLs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Redirect URLs</property-description>").optional(),
  "gatewayAccountId": z.string().describe("The Gateway Account ID which use to send transactions").optional()
}