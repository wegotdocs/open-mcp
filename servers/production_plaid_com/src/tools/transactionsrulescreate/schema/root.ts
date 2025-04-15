import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "personal_finance_category": z.string().describe("Personal finance detailed category.\n\nAll implementations are encouraged to use this field instead of `category`, as it provides more meaningful and accurate categorization.\n\nSee the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.\n"),
  "rule_details": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `rule_details` to the tool, first call the tool `expandSchema` with \"/properties/rule_details\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A representation of transactions rule details.</property-description>")
}