import { z } from "zod"

export const inputParamsSchema = {
  "env_name": z.string(),
  "commit_to_git": z.boolean().describe("Whether to commit changes to git").optional()
}