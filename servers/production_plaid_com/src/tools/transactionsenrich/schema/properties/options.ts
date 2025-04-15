import { z } from "zod"

export const inputParamsSchema = {
  "include_legacy_category": z.boolean().describe("Include `legacy_category` and `legacy_category_id` in the response (in addition to the default `personal_finance_category`).\n\nCategories are based on Plaid's legacy taxonomy. For a full list of legacy categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).").optional()
}