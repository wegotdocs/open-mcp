import { z } from "zod"

export const inputParamsSchema = {
  "workspace": z.string().describe("Required. The workspace's name."),
  "newPath": z.string().describe("Required. The new path for the directory including directory name, rooted at workspace root.").optional(),
  "path": z.string().describe("Required. The directory's full path including directory name, relative to the workspace root.").optional()
}