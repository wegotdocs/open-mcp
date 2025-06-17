import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "customerId": z.string().optional(),
  "pan": z.string().describe("The card PAN (Primary Account Number). Required if card is creating not from Token").optional(),
  "bin": z.string().describe("The card's bin (the PAN's first 6 digits)").readonly().optional(),
  "last4": z.string().describe("The PAN's last 4 digits").readonly().optional(),
  "expYear": z.number().int().describe("Card's expiry year. Required if card is creating not from Token").optional(),
  "expMonth": z.number().int().describe("Card's expiry month. Required if card is creating not from Token").optional(),
  "cvv": z.string().describe("Card's cvv (card verification value). Required if card is creating not from Token").optional(),
  "billingAddress": z.string().optional(),
  "token": z.string().describe("PaymentCardToken. Use without any other fields").optional(),
  "safeHash": z.string().describe("The card's hash. Based on bin and last 4 digits of the PAN").readonly().optional(),
  "status": z.enum(["active","expired","inactive","deactivated","pending"]).describe("Payment Card status").readonly().optional(),
  "brand": z.enum(["Visa","MasterCard","American Express","Discover","Maestro","Solo","Electron","JCB","Voyager","Diners Club","Switch","Laser","China UnionPay"]).describe("Payment Card brand").readonly().optional(),
  "bankCountry": z.string().describe("Payment Card bank country").readonly().optional(),
  "bankName": z.string().describe("Payment Card bank name").readonly().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "_links": z.array(z.union([z.string(), z.string(), z.string()])).min(1).max(3).describe("The links related to resource").readonly().optional()
}