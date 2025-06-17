import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "defaultPaymentInstrument": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `defaultPaymentInstrument` to the tool, first call the tool `expandSchema` with \"/properties/defaultPaymentInstrument\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "primaryAddress": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `primaryAddress` to the tool, first call the tool `expandSchema` with \"/properties/primaryAddress\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "_links": z.array(z.union([z.string(), z.string(), z.string(), z.string()])).min(3).describe("The links related to resource").readonly().optional()
}