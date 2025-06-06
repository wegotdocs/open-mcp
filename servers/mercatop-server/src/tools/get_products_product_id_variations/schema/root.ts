import { z } from "zod"

export const inputParamsSchema = {
  "product_id": z.number().int().describe("Unique identifier for the variable product."),
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
  "orderby": z.enum(["date","id","include","title","slug","modified","menu_order"]).describe("Sort collection by object attribute.").optional(),
  "parent": z.array(z.number().int()).describe("Limit result set to those of particular parent IDs.").optional(),
  "parent_exclude": z.array(z.number().int()).describe("Limit result set to all items except those of a particular parent ID.").optional(),
  "slug": z.string().describe("Limit result set to products with a specific slug.").optional(),
  "status": z.enum(["any","future","trash","draft","pending","private","publish"]).describe("Limit result set to products assigned a specific status.").optional(),
  "sku": z.string().describe("Limit result set to products with specific SKU(s). Use commas to separate.").optional(),
  "on_sale": z.boolean().describe("Limit result set to products on sale.").optional(),
  "min_price": z.string().describe("Limit result set to products based on a minimum price.").optional(),
  "max_price": z.string().describe("Limit result set to products based on a maximum price.").optional(),
  "stock_status": z.enum(["instock","outofstock","onbackorder"]).describe("Limit result set to products with specified stock status.").optional()
}