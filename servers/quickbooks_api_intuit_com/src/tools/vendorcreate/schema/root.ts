import { z } from "zod"

export const inputParamsSchema = {
  "AcctNum": z.string().optional(),
  "Active": z.boolean().optional(),
  "Balance": z.number().optional(),
  "BillAddr": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `BillAddr` to the tool, first call the tool `expandSchema` with \"/properties/BillAddr\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "CompanyName": z.string().optional(),
  "CurrencyRef": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `CurrencyRef` to the tool, first call the tool `expandSchema` with \"/properties/CurrencyRef\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "DisplayName": z.string().optional(),
  "FamilyName": z.string().optional(),
  "GivenName": z.string().optional(),
  "Id": z.string().optional(),
  "Mobile": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Mobile` to the tool, first call the tool `expandSchema` with \"/properties/Mobile\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "PrimaryEmailAddr": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PrimaryEmailAddr` to the tool, first call the tool `expandSchema` with \"/properties/PrimaryEmailAddr\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "PrimaryPhone": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PrimaryPhone` to the tool, first call the tool `expandSchema` with \"/properties/PrimaryPhone\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "PrintOnCheckName": z.string().optional(),
  "Suffix": z.string().optional(),
  "SyncToken": z.string().optional(),
  "TaxIdentifier": z.string().optional(),
  "Title": z.string().optional(),
  "Vendor1099": z.boolean().optional(),
  "WebAddr": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `WebAddr` to the tool, first call the tool `expandSchema` with \"/properties/WebAddr\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}