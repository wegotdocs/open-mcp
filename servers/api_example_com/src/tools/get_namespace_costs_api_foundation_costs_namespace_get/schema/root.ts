import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "use_cache": z.boolean().describe("Use cached data if available").optional()
}