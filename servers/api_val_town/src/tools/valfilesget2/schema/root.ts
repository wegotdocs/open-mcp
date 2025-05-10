import { z } from "zod"

export const inputParamsSchema = {
  "val_id": z.string().uuid().describe("Id of a val"),
  "version": z.number().int().gte(0).describe("Specific branch version to query").optional(),
  "branch_id": z.string().uuid().describe("Id to query").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory."),
  "recursive": z.boolean().describe("Whether to recursively act on all files in the project"),
  "offset": z.number().int().gte(0).describe("Number of items to skip in order to deliver paginated results"),
  "limit": z.number().int().gte(1).lte(100).describe("Maximum items to return in each paginated response")
}