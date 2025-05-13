import { z } from "zod"

export const inputParamsSchema = {
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional(),
  "page": z.number().int().describe("Current page of the collection.").optional(),
  "per_page": z.number().int().describe("Maximum number of items to be returned in result set.").optional(),
  "search": z.string().describe("Limit results to those matching a string.").optional(),
  "exclude": z.array(z.number().int()).describe("Ensure result set excludes specific IDs.").optional(),
  "include": z.array(z.number().int()).describe("Limit result set to specific IDs.").optional(),
  "offset": z.number().int().describe("Offset the result set by a specific number of items.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order sort attribute ascending or descending (asc as default).").optional(),
  "orderby": z.enum(["id","include","name","registered_date","email"]).describe("Sort collection by object attribute.").optional(),
  "email": z.string().describe("Limit result set to resources with a specific email address.").optional(),
  "role": z.enum(["all","administrator","editor","author","contributor","subscriber","customer","shop_manager"]).describe("Limit result set to resources with a specific role. Default is customer.").optional()
}