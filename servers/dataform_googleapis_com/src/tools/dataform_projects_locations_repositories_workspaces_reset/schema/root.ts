import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Required. The workspace's name."),
  "clean": z.boolean().describe("Optional. If set to true, untracked files will be deleted.").optional(),
  "paths": z.array(z.string()).describe("Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset.").optional()
}