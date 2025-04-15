import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The Plaid `access_token` for the account that will be debited or credited."),
  "account_id": z.string().describe("The Plaid `account_id` corresponding to the end-user account that will be debited or credited."),
  "authorization_id": z.string().describe("Plaid’s unique identifier for a transfer authorization. This parameter also serves the purpose of acting as an idempotency identifier."),
  "amount": z.string().describe("The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\"). When calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount authorized. If this field is left blank when calling `/transfer/create`, the maximum amount authorized in the `authorization_id` will be sent.").optional(),
  "description": z.string().max(15).describe("The transfer description. Maximum of 15 characters. If reprocessing a returned transfer, please note that the `description` field must be `\"Retry 1\"` or `\"Retry 2\"` to indicate that it's a retry of a previously returned transfer. You may retry a transfer up to 2 times, within 180 days of creating the original transfer. Only transfers that were returned with code `R01` or `R09` may be retried. For a full listing of ACH return codes, see [Transfer errors](https://plaid.com/docs/errors/transfer/#ach-return-codes)."),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply:\nThe JSON values must be Strings (no nested JSON objects allowed)\nOnly ASCII characters may be used\nMaximum of 50 key/value pairs\nMaximum key length of 40 characters\nMaximum value length of 500 characters\n</property-description>").optional(),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. This field may only be used when using `sandbox` environment. If provided, the `transfer` is created at the `virtual_time` on the provided `test_clock`.").optional(),
  "facilitator_fee": z.string().describe("The amount to deduct from `transfer.amount` and distribute to the platform’s Ledger balance as a facilitator fee (decimal string with two digits of precision e.g. \"10.00\"). The remainder will go to the end-customer’s Ledger balance. This must be value greater than 0 and less than or equal to the `transfer.amount`.").optional()
}