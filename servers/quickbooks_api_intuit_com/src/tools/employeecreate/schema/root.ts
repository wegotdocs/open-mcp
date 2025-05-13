import { z } from "zod"

export const inputParamsSchema = {
  "Active": z.boolean().optional(),
  "BillableTime": z.boolean().optional(),
  "DisplayName": z.string().optional(),
  "FamilyName": z.string().optional(),
  "GivenName": z.string().optional(),
  "Id": z.string().optional(),
  "MetaData": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `MetaData` to the tool, first call the tool `expandSchema` with \"/properties/MetaData\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "PrimaryAddr": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PrimaryAddr` to the tool, first call the tool `expandSchema` with \"/properties/PrimaryAddr\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "PrimaryPhone": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PrimaryPhone` to the tool, first call the tool `expandSchema` with \"/properties/PrimaryPhone\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "PrintOnCheckName": z.string().optional(),
  "SSN": z.string().optional(),
  "SyncToken": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}