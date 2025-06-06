import { z } from "zod"

export const inputParamsSchema = {
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional(),
  "page": z.number().int().describe("Current page of the collection.").optional(),
  "per_page": z.number().int().describe("Maximum number of items to be returned in result set.").optional(),
  "search": z.string().describe("Limit results to those matching a string.").optional(),
  "after": z.string().describe("Limit response to resources published after a given ISO8601 compliant date.").optional(),
  "before": z.string().describe("Limit response to resources published before a given ISO8601 compliant date.").optional(),
  "exclude": z.array(z.number().int()).describe("Ensure result set excludes specific IDs.").optional(),
  "include": z.array(z.number().int()).describe("Limit result set to specific ids.").optional(),
  "offset": z.number().int().describe("Offset the result set by a specific number of items.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order sort attribute ascending or descending.").optional(),
  "orderby": z.enum(["date","id","title"]).describe("Sort collection by object attribute.").optional(),
  "status": z.enum(["all","active","paused","disabled"]).describe("Limit result set to webhooks assigned a specific status.").optional()
}