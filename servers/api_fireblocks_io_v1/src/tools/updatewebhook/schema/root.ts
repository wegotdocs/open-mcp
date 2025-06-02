import { z } from "zod"

export const inputParamsSchema = {
  "webhookId": z.string().uuid().describe("The unique identifier of the webhook"),
  "url": z.string().min(1).describe("The url of the webhook where notifications will be sent. URL must be valid, unique and https.").optional(),
  "description": z.string().min(1).describe("description of the webhook of what it is used for.should not contain special characters.").optional(),
  "events": z.array(z.enum(["transaction.created","transaction.status.updated","transaction.approval_status.updated","external_wallet.asset.added","internal_wallet.asset.added","internal_wallet.asset.removed","contract_wallet.asset.added","contract_wallet.asset.removed","vault_account.created","vault_account.asset.added","vault_account.asset.balance_updated","vault_account.nft.balance_updated","embedded_wallet.asset.added","embedded_wallet.asset.balance_updated","exchange_account.added","fiat_account.added","ticket.created","ticket.submitted","ticket.expired","ticket.canceled","ticket.fulfilled","ticket.counterparty.added","ticket.counterparty_external_id.set","ticket.note.added","ticket.expired_in.set","ticket.expired_at.set","ticket.term.added","ticket.term.updated","ticket.term.deleted","ticket.term.funded","ticket.term.manually_funded","ticket.term.funding_canceled","ticket.term.funding_failed","ticket.term.funding_completed","ticket.term.transaction_status_changed"])).describe("The events that the webhook will be subscribed to").optional(),
  "enabled": z.boolean().describe("The status of the webhook").optional()
}