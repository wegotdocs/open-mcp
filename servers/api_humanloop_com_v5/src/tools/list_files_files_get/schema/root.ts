import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page offset for pagination.").optional(),
  "size": z.number().int().gte(0).describe("Page size for pagination. Number of files to fetch.").optional(),
  "name": z.string().describe("Case-insensitive filter for file name.").optional(),
  "template": z.boolean().describe("Filter to include only template files.").optional(),
  "type": z.array(z.enum(["prompt","tool","dataset","evaluator","flow"]).describe("Enum for File types.")).describe("List of file types to filter for.").optional(),
  "environment": z.string().describe("Case-sensitive filter for files with a deployment in the specified environment. Requires the environment name.").optional(),
  "sort_by": z.enum(["created_at","updated_at","name"]).describe("An enumeration.").describe("Field to sort files by").optional(),
  "order": z.enum(["asc","desc"]).describe("An enumeration.").describe("Direction to sort by.").optional()
}