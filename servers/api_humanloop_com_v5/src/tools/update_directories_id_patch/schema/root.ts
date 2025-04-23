import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Directory. Starts with `dir_`."),
  "name": z.string().describe("Name to set for the directory.").optional(),
  "parent_id": z.string().describe("ID of the parent directory. Specify this to move directories. Starts with `dir_`.").optional(),
  "path": z.string().describe("Path to move the directory to, relative to the root directory. Specify this to move directories. Includes name, e.g. `path/to/directory`.").optional()
}