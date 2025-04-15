import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)").optional(),
  "bank_transfer_id": z.string().nullable().describe("Plaid’s unique identifier for a bank transfer.").optional(),
  "account_id": z.string().nullable().describe("The account ID to get events for all transactions to/from an account.").optional(),
  "bank_transfer_type": z.union([z.literal("debit"), z.literal("credit"), z.literal(null)]).nullable().describe("The type of bank transfer. This will be either `debit` or `credit`.  A `debit` indicates a transfer of money into your origination account; a `credit` indicates a transfer of money out of your origination account.").optional(),
  "event_types": z.array(z.enum(["pending","cancelled","failed","posted","reversed"]).describe("The type of event that this bank transfer represents.\n\n`pending`: A new transfer was created; it is in the pending state.\n\n`cancelled`: The transfer was cancelled by the client.\n\n`failed`: The transfer failed, no funds were moved.\n\n`posted`: The transfer has been successfully submitted to the payment network.\n\n`reversed`: A posted transfer was reversed.")).describe("Filter events by event type.").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of bank transfer events to return. If the number of events matching the above parameters is greater than `count`, the most recent events will be returned.").optional(),
  "offset": z.number().int().gte(0).nullable().describe("The offset into the list of bank transfer events. When `count`=25 and `offset`=0, the first 25 events will be returned. When `count`=25 and `offset`=25, the next 25 bank transfer events will be returned.").optional(),
  "origination_account_id": z.string().nullable().describe("The origination account ID to get events for transfers from a specific origination account.").optional(),
  "direction": z.union([z.literal("inbound"), z.literal("outbound"), z.literal(null)]).nullable().describe("Indicates the direction of the transfer: `outbound`: for API-initiated transfers\n`inbound`: for payments received by the FBO account.").optional()
}