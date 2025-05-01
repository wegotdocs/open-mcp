import { z } from "zod"

export const inputParamsSchema = {
  "AccountSubType": z.string().optional(),
  "AccountType": z.string().optional(),
  "Active": z.boolean().optional(),
  "Classification": z.string().optional(),
  "CurrencyRef": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `CurrencyRef` to the tool, first call the tool `expandSchema` with \"/properties/CurrencyRef\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "CurrentBalance": z.number().optional(),
  "CurrentBalanceWithSubAccounts": z.number().optional(),
  "FullyQualifiedName": z.string().optional(),
  "Id": z.string().optional(),
  "Name": z.string().optional(),
  "SubAccount": z.boolean().optional(),
  "SyncToken": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}