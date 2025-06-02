import { z } from "zod"

export const inputParamsSchema = {
  "webhookId": z.string().uuid(),
  "order": z.enum(["ASC","DESC"]).describe("ASC / DESC ordering (default DESC)").optional(),
  "pageCursor": z.string().describe("Cursor of the required page").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Maximum number of items in the page").optional(),
  "createdStartDate": z.string().describe("sort by start date").optional(),
  "createdEndDate": z.string().describe("sort by end date").optional(),
  "statuses": z.array(z.enum(["COMPLETED","FAILED","IN_PROGRESS","ON_HOLD"]).describe("The status of the Notification")).describe("Filter by Notification statues").optional(),
  "eventTypes": z.array(z.enum(["transaction.created","transaction.status.updated","transaction.approval_status.updated","external_wallet.asset.added","internal_wallet.asset.added","internal_wallet.asset.removed","contract_wallet.asset.added","contract_wallet.asset.removed","vault_account.created","vault_account.asset.added","vault_account.asset.balance_updated","vault_account.nft.balance_updated","embedded_wallet.asset.added","embedded_wallet.asset.balance_updated","exchange_account.added","fiat_account.added","ticket.created","ticket.submitted","ticket.expired","ticket.canceled","ticket.fulfilled","ticket.counterparty.added","ticket.counterparty_external_id.set","ticket.note.added","ticket.expired_in.set","ticket.expired_at.set","ticket.term.added","ticket.term.updated","ticket.term.deleted","ticket.term.funded","ticket.term.manually_funded","ticket.term.funding_canceled","ticket.term.funding_failed","ticket.term.funding_completed","ticket.term.transaction_status_changed"])).describe("Filter by Notification eventTypes").optional(),
  "resourceId": z.string().describe("Filter by resourceId").optional()
}