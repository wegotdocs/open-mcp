import { z } from "zod"

export const inputParamsSchema = {
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional(),
  "page": z.number().int().describe("Current page of the collection.").optional(),
  "per_page": z.number().int().describe("Maximum number of items to be returned in result set.").optional(),
  "search": z.string().describe("Limit results to those matching a string.").optional(),
  "exclude": z.array(z.number().int()).describe("Ensure result set excludes specific IDs.").optional(),
  "include": z.array(z.number().int()).describe("Limit result set to specific ids.").optional(),
  "offset": z.number().int().describe("Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order sort attribute ascending or descending.").optional(),
  "orderby": z.enum(["id","include","name","slug","term_group","description","count"]).describe("Sort collection by resource attribute.").optional(),
  "hide_empty": z.boolean().describe("Whether to hide resources not assigned to any products.").optional(),
  "parent": z.number().int().describe("Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.").optional(),
  "product": z.number().int().describe("Limit result set to resources assigned to a specific product.").optional(),
  "slug": z.string().describe("Limit result set to resources with a specific slug.").optional()
}