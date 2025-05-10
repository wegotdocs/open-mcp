import { z } from "zod"

export const inputParams = {
  "status": z.enum(["shipped","notShipped"]).describe("Filter by a shipping status.").optional(),
  "type": z.enum(["firstShipment","secondShipment","returnShipment"]).describe("Filter by a shipping type.").optional(),
  "company": z.enum(["yurtici","mng","ptt"]).describe("Filter by a shipping company.").optional(),
  "dateCreatedStart": z.string().describe("Show shipping codes that are created at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateCreatedEnd": z.string().describe("Show shipping codes that are created at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "dateDispatchedStart": z.string().describe("Show shippings that are dispatched at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateDispatchedEnd": z.string().describe("Show shippings that are dispatched at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}