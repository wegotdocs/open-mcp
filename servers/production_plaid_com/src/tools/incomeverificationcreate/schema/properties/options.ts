import { z } from "zod"

export const inputParamsSchema = {
  "access_tokens": z.array(z.string().describe("The access token associated with the Item data is being requested for.")).describe("An array of access tokens corresponding to the Items that will be cross-referenced with the product data. Plaid will attempt to correlate transaction history from these Items with data from the user's paystub, such as date and amount. If the `transactions` product was not initialized for the Items during Link, it will be initialized after this Link session.").optional()
}