import { z } from "zod"

export const inputParamsSchema = {
  "created": z.string().datetime({ offset: true }).optional(),
  "critical_product": z.boolean().optional(),
  "id": z.number().int().optional(),
  "key_product": z.boolean().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "prefetch": z.array(z.enum(["authorization_groups","members"])).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "updated": z.string().datetime({ offset: true }).optional()
}