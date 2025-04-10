import { z } from "zod"

export const inputParams = {
  "dateStart": z.string().describe("Show orders created at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateEnd": z.string().describe("Show orders created at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "fulfillmentStatus": z.enum(["unfulfilled","fulfilled"]).describe("Filter by fulfillment status.").optional(),
  "refundType": z.enum(["none","partial","full"]).describe("Filter by refund type.").optional(),
  "customerEmail": z.string().describe("Filter by a customer's email address.").optional(),
  "customerPhone": z.string().describe("Filter by a customer's phone number.").optional(),
  "productId": z.string().describe("Filter by a product by specifying product ID.").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}