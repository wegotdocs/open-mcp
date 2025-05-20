import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(100).describe("The numbers of items to return per page").optional(),
  "offset": z.number().int().gte(0).describe("The number of items to skip before starting to collect the result set").optional(),
  "sort_by": z.enum(["username","releases","downloads","latest_release"]).describe("Desired order in which to return results").optional(),
  "with_html": z.boolean().describe("Render markdown files (README, REFERENCE, etc.) to HTML before returning results").optional(),
  "include_fields": z.array(z.string()).describe("List of top level keys to include in response object, only applies to fields marked 'optional'").optional(),
  "exclude_fields": z.array(z.string()).describe("List of top level keys to exclude from response object").optional(),
  "If-Modified-Since": z.string().describe("Only processes the request if the resource or list of resources has changed since the given time,\notherwise returns a `304 Not Modified` response\n").optional()
}