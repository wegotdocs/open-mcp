import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page offset for pagination.").optional(),
  "size": z.number().int().gte(0).describe("Page size for pagination. Number of Datasets to fetch.").optional(),
  "name": z.string().describe("Case-insensitive filter for Dataset name.").optional(),
  "user_filter": z.string().describe("Case-insensitive filter for users in the Dataset. This filter matches against both email address and name of users.").optional(),
  "sort_by": z.enum(["created_at","updated_at","name"]).describe("An enumeration.").describe("Field to sort Datasets by").optional(),
  "order": z.enum(["asc","desc"]).describe("An enumeration.").describe("Direction to sort by.").optional()
}