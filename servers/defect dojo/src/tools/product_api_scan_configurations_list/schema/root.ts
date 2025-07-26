import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "prefetch": z.array(z.enum(["product","tool_configuration"])).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "product": z.number().int().optional(),
  "service_key_1": z.string().optional(),
  "service_key_2": z.string().optional(),
  "service_key_3": z.string().optional(),
  "tool_configuration": z.number().int().optional()
}