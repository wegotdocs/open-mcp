import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().describe("Commit message"),
  "files": z.union([z.array(z.string()), z.null()]).describe("Specific files to commit (empty for all)").optional()
}