import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().describe("File path relative to repository root"),
  "content": z.string().describe("File content"),
  "commit_message": z.union([z.string(), z.null()]).describe("Custom commit message").optional()
}