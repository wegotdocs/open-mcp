import { z } from "zod"

export const inputParamsSchema = {
  "billingDetails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `billingDetails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/channelToStoreLink/properties/billingDetails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Information specific to billing (read-only).</property-description>").optional(),
  "merchantId": z.string().describe("Google Merchant Center id of the store.").optional(),
  "storeName": z.string().describe("Name of the store.").optional(),
  "storeUrl": z.string().describe("Landing page of the store.").optional()
}