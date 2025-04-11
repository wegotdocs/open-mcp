import { z } from "zod"

export const inputParams = {
  "payment_method_id": z.number().int().describe("The ID of the Payment Method to apply to the Payment.").optional(),
  "usd": z.string().regex(new RegExp("^\\$?\\d+\\.\\d{2}$")).describe("The amount in US Dollars of the Payment.\n\n- Can begin with or without `{
  "payment_method_id": z.number().int().describe("The ID of the Payment Method to apply to the Payment.").optional(),
  "usd": .\n- Commas (`,`) are not accepted.\n- Must end with a decimal expression, such as `.00` or `.99`.\n- Minimum: `$5.00` or the Account balance, whichever is lower.\n- Maximum: `$2000.00` or the Account balance up to `$50000.00`, whichever is greater.").optional()
}