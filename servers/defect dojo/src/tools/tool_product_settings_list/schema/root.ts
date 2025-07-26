import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "prefetch": z.array(z.enum(["notes","product","tool_configuration"])).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "product": z.number().int().optional(),
  "tool_configuration": z.number().int().optional(),
  "tool_project_id": z.string().optional(),
  "url": z.string().optional()
}