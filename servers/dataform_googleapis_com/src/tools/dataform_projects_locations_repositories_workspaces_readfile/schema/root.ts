import { z } from "zod"

export const inputParamsSchema = {
  "workspace": z.string().describe("Required. The workspace's name."),
  "path": z.string().describe("Required. The file's full path including filename, relative to the workspace root.").optional()
}