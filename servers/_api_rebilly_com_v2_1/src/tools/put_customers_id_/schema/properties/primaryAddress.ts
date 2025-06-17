import { z } from "zod"

export const inputParamsSchema = {
  "firstName": z.string().describe("The contact first name").optional(),
  "lastName": z.string().describe("The contact last name").optional(),
  "organization": z.string().describe("The contact organization").optional(),
  "address": z.string().max(60).describe("The contact street address").optional(),
  "address2": z.string().max(60).describe("The contact street address (second line)").optional(),
  "city": z.string().max(45).describe("The contact city").optional(),
  "region": z.string().max(45).describe("The contact region (state)").optional(),
  "country": z.string().regex(new RegExp("^[A-Z]{2}$")).describe("The contact country ISO Alpha-2 code").optional(),
  "postalCode": z.string().max(10).describe("The contact postal code").optional(),
  "phoneNumbers": z.array(z.object({ "label": z.string().describe("The phone label"), "value": z.string().describe("The phone value"), "primary": z.boolean().describe("True if phone is primary").optional() })).describe("The contact phone numbers").optional(),
  "emails": z.array(z.object({ "label": z.string().describe("The email label"), "value": z.string().describe("The email value"), "primary": z.boolean().describe("True if email is primary").optional() })).describe("The contact emails").optional()
}