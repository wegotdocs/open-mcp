import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().min(1).describe("The url of the webhook where notifications will be sent. URL must be valid, unique and https."),
  "description": z.string().min(1).describe("description of the webhook. should not contain special characters.").optional(),
  "events": z.array(z.enum(["transaction.created","transaction.status.updated","transaction.approval_status.updated","external_wallet.asset.added","external_wallet.asset.removed","internal_wallet.asset.added","internal_wallet.asset.removed","contract_wallet.asset.added","contract_wallet.asset.removed","vault_account.created","vault_account.asset.listed","vault_account.asset.balance_updated","embedded_wallet.status.updated","embedded_wallet.created","embedded_wallet.asset.balance_updated","embedded_wallet.asset.listed","embedded_wallet.account.created","embedded_wallet.device.added"])).describe("event types the webhook will subscribe to"),
  "enabled": z.boolean().describe("The status of the webhook. If false, the webhook will not receive notifications.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}