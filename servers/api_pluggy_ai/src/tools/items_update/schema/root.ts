import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Item primary identifier"),
  "parameters": z.record(z.any()).describe("Parameters to update on the item stored credentials.").optional(),
  "clientUserId": z.string().describe("Client's external identifier for the user, it can be a ID, UUID or even an email. This is free for clients to use.").optional(),
  "webhookUrl": z.string().url().describe("Url to be notified of item changes").optional(),
  "products": z.array(z.enum(["ACCOUNTS","CREDIT_CARDS","TRANSACTIONS","PAYMENT_DATA","INVESTMENTS","INVESTMENTS_TRANSACTIONS","IDENTITY","BROKERAGE_NOTE","MOVE_SECURITY","LOANS"])).describe("Products to be collected in the connection").optional()
}