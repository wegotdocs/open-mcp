import { z } from "zod"

export const inputParams = {
  "dateStart": z.string().describe("Show refunds processed at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateEnd": z.string().describe("Show refunds processed at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "orderId": z.string().describe("Filter by order ID.").optional(),
  "status": z.enum(["pending","failed","succeeded"]).describe("Filter by refund status.").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}