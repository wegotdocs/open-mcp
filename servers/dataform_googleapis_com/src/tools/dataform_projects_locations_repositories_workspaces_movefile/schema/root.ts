import { z } from "zod"

export const inputParamsSchema = {
  "workspace": z.string().describe("Required. The workspace's name."),
  "newPath": z.string().describe("Required. The file's new path including filename, relative to the workspace root.").optional(),
  "path": z.string().describe("Required. The file's full path including filename, relative to the workspace root.").optional()
}