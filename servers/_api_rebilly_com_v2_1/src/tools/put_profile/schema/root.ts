import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "email": z.string().email().max(100).describe("The user email").readonly().optional(),
  "firstName": z.string().describe("User's first name").readonly().optional(),
  "lastName": z.string().describe("User's last name").readonly().optional(),
  "businessPhone": z.string().describe("The user business phone number").readonly().optional(),
  "mobilePhone": z.string().describe("The user mobile phone number").readonly().optional(),
  "availableCurrencies": z.array(z.string()).describe("An array of reporting currencies enabled for the merchant").readonly().optional(),
  "reportingCurrency": z.string().describe("The user's ISO Alpha-3 code used for reports").optional(),
  "totpRequired": z.boolean().describe("The user setting of two-factor authentication").readonly().optional(),
  "totpSecret": z.string().describe("The user TOTP key for authentication app (if TOTP enabled)").readonly().optional(),
  "totpUrl": z.string().describe("The user link to QR-code for TOTP authentication app (if TOTP enabled)").readonly().optional(),
  "country": z.string().describe("The user country setting - two letter code").readonly().optional(),
  "preferences": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `preferences` to the tool, first call the tool `expandSchema` with \"/properties/preferences\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User preferences like timezone, language and many more. This is an object with custom properties.</property-description>").optional()
}