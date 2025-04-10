import { z } from "zod"

export const inputParams = {
  "dateStart": z.string().describe("Show products listed at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateEnd": z.string().describe("Show products listed at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "productType": z.enum(["physical","digital"]).describe("Filter by a product type. ").optional(),
  "shippingPayer": z.enum(["buyerPays","sellerPays"]).describe("Filter by who pays for shipping. ").optional(),
  "stockStatus": z.enum(["inStock","outOfStock"]).describe("Filter by a stock status.").optional(),
  "categoryId": z.array(z.string()).describe("Filter by product categories by specifying category ID(s).").optional(),
  "selectionId": z.array(z.string()).describe("Filter by product selections by specifying selection ID(s).").optional(),
  "discount": z.boolean().describe("Filter by products with discounts.").optional(),
  "customListing": z.boolean().describe("Filter by customized listings.").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}