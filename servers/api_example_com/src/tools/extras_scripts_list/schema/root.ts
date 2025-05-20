import { z } from "zod"

export const inputParamsSchema = {
  "id": z.array(z.number().int()).optional(),
  "id__empty": z.boolean().optional(),
  "id__gt": z.array(z.number().int()).optional(),
  "id__gte": z.array(z.number().int()).optional(),
  "id__lt": z.array(z.number().int()).optional(),
  "id__lte": z.array(z.number().int()).optional(),
  "id__n": z.array(z.number().int()).optional(),
  "is_executable": z.boolean().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "module_id": z.array(z.number().int()).describe("Script module (ID)").optional(),
  "module_id__n": z.array(z.number().int()).describe("Script module (ID)").optional(),
  "name": z.array(z.string()).optional(),
  "name__empty": z.boolean().optional(),
  "name__ic": z.array(z.string()).optional(),
  "name__ie": z.array(z.string()).optional(),
  "name__iew": z.array(z.string()).optional(),
  "name__isw": z.array(z.string()).optional(),
  "name__n": z.array(z.string()).optional(),
  "name__nic": z.array(z.string()).optional(),
  "name__nie": z.array(z.string()).optional(),
  "name__niew": z.array(z.string()).optional(),
  "name__nisw": z.array(z.string()).optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "q": z.string().describe("Search").optional()
}