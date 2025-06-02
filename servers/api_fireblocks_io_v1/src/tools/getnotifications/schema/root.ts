import { z } from "zod"

export const inputParamsSchema = {
  "webhookId": z.string().uuid(),
  "order": z.enum(["ASC","DESC"]).describe("ASC / DESC ordering (default DESC)").optional(),
  "pageCursor": z.string().describe("Cursor of the required page").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Maximum number of items in the page").optional(),
  "createdStartDate": z.string().describe("sort by start date").optional(),
  "createdEndDate": z.string().describe("sort by end date").optional(),
  "statuses": z.array(z.enum(["COMPLETED","FAILED","IN_PROGRESS","ON_HOLD"]).describe("The status of the Notification")).describe("Filter by Notification statues").optional(),
  "eventTypes": z.array(z.enum(["transaction.created","transaction.status.updated","transaction.approval_status.updated","external_wallet.asset.added","external_wallet.asset.removed","internal_wallet.asset.added","internal_wallet.asset.removed","contract_wallet.asset.added","contract_wallet.asset.removed","vault_account.created","vault_account.asset.listed","vault_account.asset.balance_updated","embedded_wallet.status.updated","embedded_wallet.created","embedded_wallet.asset.balance_updated","embedded_wallet.asset.listed","embedded_wallet.account.created","embedded_wallet.device.added"])).describe("Filter by Notification eventTypes").optional(),
  "resourceId": z.string().describe("Filter by resourceId").optional()
}