import { z } from "zod"

export const inputParamsSchema = {
  "include": z.array(z.string()).describe("Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.").optional(),
  "exclude": z.array(z.string()).describe("Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.").optional()
}