import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "not_tag": z.string().describe("Not Tag name contains").optional(),
  "not_tags": z.array(z.string()).describe("Comma separated list of exact tags not present on model").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "prefetch": z.array(z.enum(["product","user"])).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "product": z.number().int().optional(),
  "tag": z.string().describe("Tag name contains").optional(),
  "tags": z.array(z.string()).describe("Comma separated list of exact tags (uses OR for multiple values)").optional(),
  "tags__and": z.array(z.string()).describe("Comma separated list of exact tags to match with an AND expression").optional(),
  "user": z.number().int().optional(),
  "version": z.string().optional()
}