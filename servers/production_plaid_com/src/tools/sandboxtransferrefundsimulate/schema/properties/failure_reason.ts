import { z } from "zod"

export const inputParamsSchema = {
  "failure_code": z.string().nullable().describe("The failure code, e.g. `R01`.  A failure code will be provided if and only if the transfer status is `returned`. See [ACH return codes](https://plaid.com/docs/errors/transfer/#ach-return-codes) for a full listing of ACH return codes and [RTP error codes](https://plaid.com/docs/errors/transfer/#rtp-error-codes) for RTP error codes.").optional(),
  "description": z.string().describe("A human-readable description of the reason for the failure or reversal.").optional()
}