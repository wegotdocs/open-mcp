import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().gte(1).lte(500).describe("Count of objects to return").optional(),
  "offset": z.number().gte(0).describe("Offset of objects to return").optional(),
  "time_from": z.number().describe("Timestamp from which to get objects").optional(),
  "time_to": z.number().describe("Timestamp up to which to get objects").optional(),
  "normal_types": z.boolean().describe("If false, include system messages").optional(),
  "author": z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID").optional(),
  "from_me": z.boolean().describe("If true, only return messages sent by the authenticated user. If false, only return messages sent by other users.").optional(),
  "sort": z.enum(["asc","desc"]).describe("Order for items in request").optional()
}