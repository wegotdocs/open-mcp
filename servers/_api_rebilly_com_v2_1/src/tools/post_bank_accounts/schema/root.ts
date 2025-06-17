import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "customerId": z.string().optional(),
  "bankName": z.string().describe("Bank's name.").optional(),
  "routingNumber": z.string().describe("Bank's Routing Number. Required if bank account is not created from Token. This field is write-only").optional(),
  "accountNumber": z.string().describe("Bank's Account Number. Required if bank account is not created from Token. This field is write-only").optional(),
  "accountType": z.string().describe("Banks's Account type. Required if bank account is not created from Token").optional(),
  "token": z.string().describe("Bank Account Token. Use without any other fields").optional(),
  "address": z.string().optional(),
  "status": z.enum(["active","deactivated"]).describe("Bank Account status").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "_links": z.array(z.union([z.string(), z.string(), z.string()])).min(1).max(3).describe("The links related to resource").readonly().optional()
}