import { z } from "zod"

export const inputParamsSchema = {
  "val_id": z.string().uuid().describe("Id of a val"),
  "version": z.number().int().gte(0).describe("Specific branch version to query").optional(),
  "branch_id": z.string().uuid().describe("Id to query").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory."),
  "If-Match": z.string().optional(),
  "If-Unmodified-Since": z.string().optional(),
  "If-None-Match": z.string().optional(),
  "If-Modified-Since": z.string().optional(),
  "Cache-Control": z.string().optional()
}