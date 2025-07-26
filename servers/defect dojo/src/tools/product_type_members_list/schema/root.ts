import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "prefetch": z.array(z.enum(["product_type","role","user"])).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "product_type_id": z.number().int().optional(),
  "user_id": z.number().int().optional()
}