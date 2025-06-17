import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().describe("The website's name"),
  "url": z.string().describe("The website's domain address"),
  "servicePhone": z.string().describe("The website's customer service phone number"),
  "serviceEmail": z.string().email().describe("The website's customer service email address"),
  "checkoutPageUri": z.string().describe("Your own custom URI for this Checkout Page").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "_links": z.array(z.union([z.string(), z.string()])).min(1).max(2).describe("The links related to resource").readonly().optional()
}