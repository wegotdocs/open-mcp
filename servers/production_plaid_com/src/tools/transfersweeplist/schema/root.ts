import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of sweeps to return (RFC 3339 format).").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of sweeps to return (RFC 3339 format).").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of sweeps to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of sweeps to skip before returning results.").optional(),
  "amount": z.string().nullable().describe("Filter sweeps to only those with the specified amount.").optional(),
  "status": z.union([z.literal("pending"), z.literal("posted"), z.literal("settled"), z.literal("funds_available"), z.literal("returned"), z.literal("failed"), z.literal(null)]).nullable().describe("The status of a sweep transfer\n\n`\"pending\"` - The sweep is currently pending\n`\"posted\"` - The sweep has been posted\n`\"settled\"` - The sweep has settled\n`\"returned\"` - The sweep has been returned\n`\"funds_available\"` - Funds from the sweep have been released from hold and applied to the ledger's available balance. (Only applicable to deposits)\n`\"failed\"` - The sweep has failed").optional(),
  "originator_client_id": z.string().nullable().describe("Filter sweeps to only those with the specified originator client.").optional(),
  "funding_account_id": z.string().nullable().describe("Filter sweeps to only those with the specified `funding_account_id`.").optional(),
  "transfer_id": z.string().nullable().describe("Filter sweeps to only those with the included `transfer_id`.").optional(),
  "trigger": z.enum(["manual","incoming","balance_threshold","automatic_aggregate"]).nullable().describe("The trigger of the sweep\n\n`\"manual\"` - The sweep is created manually by the customer\n`\"incoming\"` - The sweep is created by incoming funds flow (e.g. Incoming Wire)\n`\"balance_threshold\"` - The sweep is created by balance threshold setting\n`\"automatic_aggregate\"` - The sweep is created by the Plaid automatic aggregation process. These funds did not pass through the Plaid Ledger balance.").optional()
}