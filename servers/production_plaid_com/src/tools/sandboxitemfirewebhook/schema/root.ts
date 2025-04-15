import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "webhook_type": z.enum(["AUTH","HOLDINGS","INVESTMENTS_TRANSACTIONS","ITEM","LIABILITIES","TRANSACTIONS","ASSETS"]).describe("The webhook types that can be fired by this test endpoint.").optional(),
  "webhook_code": z.enum(["DEFAULT_UPDATE","NEW_ACCOUNTS_AVAILABLE","SMS_MICRODEPOSITS_VERIFICATION","AUTHORIZATION_GRANTED","USER_PERMISSION_REVOKED","USER_ACCOUNT_REVOKED","PENDING_DISCONNECT","RECURRING_TRANSACTIONS_UPDATE","LOGIN_REPAIRED","SYNC_UPDATES_AVAILABLE","PRODUCT_READY","ERROR"]).describe("The webhook codes that can be fired by this test endpoint.")
}