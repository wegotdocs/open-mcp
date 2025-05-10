import { z } from "zod"

export const inputParamsSchema = {
  "account_ids": z.array(z.string()).describe("An array of `account_ids` to retrieve for the Item.").optional(),
  "count": z.number().int().gte(1).lte(500).describe("The number of transactions to fetch.\n").optional(),
  "offset": z.number().int().gte(0).describe("The number of transactions to skip when fetching transaction history").optional(),
  "async_update": z.boolean().describe("If the Item was not initialized with the investments product via the `products`, `required_if_supported_products`, or `optional_products` array when calling `/link/token/create`, and `async_update` is set to true, the initial Investments extraction will happen asynchronously. Plaid will subsequently fire a `HISTORICAL_UPDATE` webhook when the extraction completes. When `false`, Plaid will wait to return a response until extraction completion and no `HISTORICAL_UPDATE` webhook will fire. Note that while the extraction is happening asynchronously, calls to `/investments/transactions/get` and `/investments/refresh` will return `PRODUCT_NOT_READY` errors until the extraction completes.").optional()
}