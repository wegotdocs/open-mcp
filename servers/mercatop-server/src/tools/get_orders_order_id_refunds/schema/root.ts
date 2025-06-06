import { z } from "zod"

export const inputParamsSchema = {
  "order_id": z.number().int().describe("The order ID."),
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional(),
  "page": z.number().int().describe("Current page of the collection.").optional(),
  "per_page": z.number().int().describe("Maximum number of items to be returned in result set.").optional(),
  "search": z.string().describe("Limit results to those matching a string.").optional(),
  "after": z.string().describe("Limit response to resources published after a given ISO8601 compliant date.").optional(),
  "before": z.string().describe("Limit response to resources published before a given ISO8601 compliant date.").optional(),
  "modified_after": z.string().describe("Limit response to resources modified after a given ISO8601 compliant date.").optional(),
  "modified_before": z.string().describe("Limit response to resources modified before a given ISO8601 compliant date.").optional(),
  "dates_are_gmt": z.boolean().describe("Whether to consider GMT post dates when limiting response by published or modified date.").optional(),
  "exclude": z.array(z.number().int()).describe("Ensure result set excludes specific IDs.").optional(),
  "include": z.array(z.number().int()).describe("Limit result set to specific ids.").optional(),
  "offset": z.number().int().describe("Offset the result set by a specific number of items.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order sort attribute ascending or descending.").optional(),
  "orderby": z.enum(["date","id","include","title","slug","modified"]).describe("Sort collection by object attribute.").optional(),
  "parent": z.array(z.number().int()).describe("Limit result set to those of particular parent IDs.").optional(),
  "parent_exclude": z.array(z.number().int()).describe("Limit result set to all items except those of a particular parent ID.").optional(),
  "dp": z.number().int().describe("Number of decimal points to use in each resource.").optional()
}