import { z } from "zod"

export const inputParamsSchema = {
  "qrCode": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `qrCode` to the tool, first call the tool `expandSchema` with \"/properties/qrCode\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>QRCode payload for payment</property-description>"),
  "value": z.number().describe("Value to be paid"),
  "description": z.string().describe("Payment Description").optional(),
  "scheduleDate": z.string().date().describe("Used to schedule payment").optional()
}