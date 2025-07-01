import { z } from "zod"

export const inputParamsSchema = {
  "addressKey": z.string().describe("Key that will receive QrCode payments").optional(),
  "description": z.string().describe("QrCode Description").optional(),
  "value": z.number().describe("Value of the QrCode, if not informed, the payer can choose the value").optional(),
  "format": z.enum(["ALL","IMAGE","PAYLOAD"]).describe("QrCode Format").optional(),
  "expirationDate": z.string().datetime({ offset: true }).describe("QrCode expiration date/time, after this date all payments will be refused.").optional(),
  "expirationSeconds": z.number().int().describe("Determines the expiration date in seconds.").optional(),
  "allowsMultiplePayments": z.boolean().describe("Defines whether the QrCode can be paid multiple times, if not entered the default value is true.").optional(),
  "externalReference": z.string().max(100).describe("Free search field").optional()
}