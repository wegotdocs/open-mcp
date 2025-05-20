import { z } from "zod"

export const inputParamsSchema = {
  "search_filter_slug": z.string().regex(new RegExp("^[a-zA-Z0-9]+[-\\/][a-z][a-z0-9_]*$")).describe("Publish a new search filter for logged-in user\n"),
  "with_html": z.boolean().describe("Render markdown files (README, REFERENCE, etc.) to HTML before returning results").optional(),
  "include_fields": z.array(z.string()).describe("List of top level keys to include in response object, only applies to fields marked 'optional'").optional(),
  "exclude_fields": z.array(z.string()).describe("List of top level keys to exclude from response object").optional(),
  "If-Modified-Since": z.string().describe("Only processes the request if the resource or list of resources has changed since the given time,\notherwise returns a `304 Not Modified` response\n").optional()
}