import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "email": z.string().email().max(100).describe("The user email"),
  "firstName": z.string().describe("User's first name"),
  "lastName": z.string().describe("User's last name"),
  "businessPhone": z.string().describe("The user business phone number").optional(),
  "mobilePhone": z.string().describe("The user mobile phone number").optional(),
  "password": z.string().describe("User's password. If not provided, password reset email will be sent").optional(),
  "permissions": z.string().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "loginTime": z.string().optional(),
  "reportingCurrency": z.string().describe("The user's ISO Alpha-3 code used for reports").optional(),
  "availableCurrencies": z.array(z.string()).describe("An array of reporting currencies enabled for the merchant").readonly().optional(),
  "totpRequired": z.boolean().describe("The user setting of two-factor authentication").optional(),
  "totpSecret": z.string().describe("The user TOTP key for authentication app (if TOTP enabled)").optional(),
  "totpUrl": z.string().describe("The user link to QR-code for TOTP authentication app (if TOTP enabled)").optional(),
  "status": z.enum(["active","inactive","pending-confirmation"]).describe("The user status").readonly().optional(),
  "country": z.string().describe("The user country setting - two letter code").optional(),
  "preferences": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `preferences` to the tool, first call the tool `expandSchema` with \"/properties/preferences\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User preferences like timezone, language and many more. This is an object with custom properties.</property-description>").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}