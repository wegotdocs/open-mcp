import { z } from "zod"

export const inputParamsSchema = {
  "authentication_type": z.enum(["API","Password","SSH"]).nullable().describe("* `API` - API Key\n* `Password` - Username/Password\n* `SSH` - SSH").optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "prefetch": z.array(z.literal("tool_type")).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "tool_type": z.number().int().optional(),
  "url": z.string().optional()
}