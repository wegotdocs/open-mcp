import { z } from "zod"

export const inputParamsSchema = {
  "days_requested": z.number().int().gte(1).lte(730).describe("The maximum number of days of transaction history to request for the Transactions product. The more transaction history is requested, the longer the historical update poll will take. The default value is 90 days. If a value under 30 is provided, a minimum of 30 days of history will be requested. Once Transactions has been added to an Item, this value cannot be updated.\n\nCustomers using [Recurring Transactions](https://plaid.com/docs/api/products/transactions/#transactionsrecurringget) should request at least 180 days of history for optimal results.").optional()
}