import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "eventsFilter": z.array(z.enum(["gateway-account-requested","subscription-trial-ended","subscription-activated","subscription-canceled","subscription-renewed","transaction-processed","payment-card-expired","payment-declined","invoice-modified","invoice-created","dispute-created","suspended-payment-completed"]).describe("Rebilly webhooks event type")).describe("An array of System event type").optional(),
  "status": z.enum(["active","inactive"]).optional(),
  "method": z.enum(["GET","POST","PUT","PATCH","DELETE"]),
  "url": z.string().url().describe("URL that will be triggered when the given event occurs."),
  "headers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `headers` to the tool, first call the tool `expandSchema` with \"/properties/headers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Map of elements with header name - header value association</property-description>").optional(),
  "credentialHash": z.string().describe("Hash from Credentials which is used for authentication by the given URL"),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("Links related to resource").readonly().optional()
}