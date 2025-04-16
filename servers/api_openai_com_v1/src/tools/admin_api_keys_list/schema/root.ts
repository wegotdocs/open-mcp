import { z } from "zod"

export const inputParamsSchema = {
  "after": z.string().nullable().describe("Return keys with IDs that come after this ID in the pagination order.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order results by creation time, ascending or descending.").optional(),
  "limit": z.number().int().describe("Maximum number of keys to return.").optional()
}