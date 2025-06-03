import { z } from "zod"

export const inputParamsSchema = {
  "pixQrCode": z.string().describe("Pix QR code"),
  "callbackUrls": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `callbackUrls` to the tool, first call the tool `expandSchema` with \"/properties/callbackUrls\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Redirect urls after the payment was completed or ended in error status</property-description>").optional(),
  "customerId": z.string().uuid().describe("Customer identifier associated to the payment").optional()
}