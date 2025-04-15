import { z } from "zod"

export const inputParamsSchema = {
  "workspace": z.string().describe("Required. The workspace's name."),
  "path": z.string().describe("Required. The directory's full path including directory name, relative to the workspace root.").optional()
}