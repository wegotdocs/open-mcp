import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "customerId": z.string().optional(),
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
  "emails": z.array(z.object({ "label": z.string().describe("The email label"), "value": z.string().describe("The email value"), "primary": z.boolean().describe("True if email is primary").optional() })).describe("The contact emails").optional(),
  "isOutdated": z.boolean().describe("Is contact outdated").readonly().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "_links": z.array(z.union([z.string(), z.string()])).min(1).max(2).describe("The links related to resource").readonly().optional()
}