import { z } from "zod"

export const inputParamsSchema = {
  "connectorId": z.number().describe("Primary identifier of the connector"),
  "parameters": z.record(z.any()).describe("Connector's credentials that are required to execute on a Key-Value object or a string if they are encrypted"),
  "webhookUrl": z.string().url().describe("Url to be notified of item changes").optional(),
  "clientUserId": z.string().describe("Client's external identifier for the user, it can be a ID, UUID or even an email. This is free for clients to use.").optional(),
  "oauthRedirectUri": z.string().url().describe("Redirect URI required for the Oauth flow").optional(),
  "products": z.array(z.enum(["ACCOUNTS","CREDIT_CARDS","TRANSACTIONS","PAYMENT_DATA","INVESTMENTS","INVESTMENTS_TRANSACTIONS","IDENTITY","BROKERAGE_NOTE","MOVE_SECURITY","LOANS"])).describe("Products to be collected in the connection").optional(),
  "avoidDuplicates": z.boolean().describe("Avoids creating a new item if there is already one with the same credentials").optional()
}