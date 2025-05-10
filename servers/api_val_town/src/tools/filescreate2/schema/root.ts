import { z } from "zod"

export const inputParamsSchema = {
  "val_id": z.string().uuid().describe("Id of a val"),
  "branch_id": z.string().uuid().describe("The specified branch of the resource. Defaults to main if not provided.").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory.")
}