import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "notificationUrl": z.string().describe("Subscription URL, routed via APIM"),
  "providerName": z.enum(["startform","tableform"]).describe("Provider name"),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Configuration for CRUD operations</property-description>"),
  "Authorization": z.string()
}