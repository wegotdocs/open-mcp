import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the directory to create.").optional(),
  "parent_id": z.string().describe("ID of the parent directory. Starts with `dir_`.").optional(),
  "path": z.string().describe("Path to create the directory in, relative to the root directory. If the path does not exist, it will be created. Includes name, e.g. `path/to/directory`.").optional()
}