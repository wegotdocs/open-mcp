import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "origination_account_id": z.string().nullable().describe("If multiple origination accounts are available, `origination_account_id` must be used to specify the account that the sweeps belong to.").optional(),
  "start_time": z.string().datetime({ offset: true }).nullable().describe("The start datetime of sweeps to return (RFC 3339 format).").optional(),
  "end_time": z.string().datetime({ offset: true }).nullable().describe("The end datetime of sweeps to return (RFC 3339 format).").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of sweeps to return.").optional()
}