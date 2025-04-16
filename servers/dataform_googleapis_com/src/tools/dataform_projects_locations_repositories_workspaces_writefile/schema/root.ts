import { z } from "zod"

export const inputParamsSchema = {
  "workspace": z.string().describe("Required. The workspace's name."),
  "contents": z.string().describe("Required. The file's contents.").optional(),
  "path": z.string().describe("Required. The file.").optional()
}