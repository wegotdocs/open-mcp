import { z } from "zod"

export const inputParamsSchema = {
  "sku": z.string().describe("Limit result set to products with a specific SKU.").optional(),
  "attribute": z.string().describe("Limit result set to products with a specific attribute.").optional(),
  "per_page": z.number().int().describe("Maximum number of items to be returned in result set. Default is 10.").optional(),
  "page": z.number().int().describe("Current page of the collection. Default is 1.").optional(),
  "after": z.string().describe("Limit response to resources published after a given ISO8601 compliant date (eg. 2023-05-07T10:00:00).").optional(),
  "before": z.string().describe("Limit response to resources published before a given ISO8601 compliant date (eg. 2023-10-07T12:10:16).").optional(),
  "modified_after": z.string().describe("Limit response to resources modified after a given ISO8601 compliant date. (eg. 2023-05-07T10:00:00).").optional(),
  "status": z.array(z.enum(["any","draft","pending","private","publish"])).describe("Limit result set to products assigned a specific status. Options: any, draft, pending, private and publish. Default is any.").optional(),
  "stock_status": z.enum(["instock","outofstock","onbackorder"]).describe("Limit result set to products with specified stock status. Options: instock, outofstock and onbackorder.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order sort attribute ascending or descending. Options: asc and desc. Default is desc.").optional()
}