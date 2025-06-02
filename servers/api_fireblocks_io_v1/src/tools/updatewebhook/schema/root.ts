import { z } from "zod"

export const inputParamsSchema = {
  "webhookId": z.string().uuid().describe("The unique identifier of the webhook"),
  "url": z.string().min(1).describe("The url of the webhook where notifications will be sent. URL must be valid, unique and https.").optional(),
  "description": z.string().min(1).describe("description of the webhook of what it is used for.should not contain special characters.").optional(),
  "events": z.array(z.enum(["transaction.created","transaction.status.updated","transaction.approval_status.updated","external_wallet.asset.added","external_wallet.asset.removed","internal_wallet.asset.added","internal_wallet.asset.removed","contract_wallet.asset.added","contract_wallet.asset.removed","vault_account.created","vault_account.asset.listed","vault_account.asset.balance_updated","embedded_wallet.status.updated","embedded_wallet.created","embedded_wallet.asset.balance_updated","embedded_wallet.asset.listed","embedded_wallet.account.created","embedded_wallet.device.added"])).describe("The events that the webhook will be subscribed to").optional(),
  "enabled": z.boolean().describe("The status of the webhook").optional()
}