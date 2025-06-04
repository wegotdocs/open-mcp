import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().gte(1).lte(500).describe("Count of objects to return").optional(),
  "offset": z.number().gte(0).describe("Offset of objects to return").optional(),
  "time_from": z.number().describe("Timestamp from which to get objects").optional(),
  "time_to": z.number().describe("Timestamp up to which to get objects").optional(),
  "sort": z.enum(["asc","desc"]).describe("Order for items in request").optional()
}