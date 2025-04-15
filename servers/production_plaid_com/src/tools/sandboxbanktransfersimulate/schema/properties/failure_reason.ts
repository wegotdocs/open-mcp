import { z } from "zod"

export const inputParamsSchema = {
  "ach_return_code": z.string().nullable().describe("The ACH return code, e.g. `R01`.  A return code will be provided if and only if the transfer status is `reversed`. For a full listing of ACH return codes, see [Bank Transfers errors](https://plaid.com/docs/errors/bank-transfers/#ach-return-codes).").optional(),
  "description": z.string().describe("A human-readable description of the reason for the failure or reversal.").optional()
}