import { z } from "zod"

export const inputParamsSchema = {
  "val_id": z.string().uuid().describe("Id of a val"),
  "branch_id": z.string().uuid().describe("The specified branch of the resource. Defaults to main if not provided.").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory."),
  "content": z.string().min(0).max(80000).describe("File and val content. An empty string will create an empty file. When creating a directory, the content should be null or undefined.").optional(),
  "type": z.enum(["file","interval","http","email","script"]).optional(),
  "parent_path": z.union([z.string().describe("Path to the directory you'd like to move this file to (e.g. 'folder1/folder2')"), z.null()]).optional(),
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-_.]+$")).min(1).max(48).optional()
}