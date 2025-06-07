import { z } from "zod"

export const inputParamsSchema = {
  "user_name": z.union([z.string(), z.null()]).describe("Git user name").optional(),
  "user_email": z.union([z.string(), z.null()]).describe("Git user email").optional(),
  "global_config": z.boolean().describe("Use global git config").optional()
}