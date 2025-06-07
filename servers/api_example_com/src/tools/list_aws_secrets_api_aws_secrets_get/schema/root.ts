import { z } from "zod"

export const inputParamsSchema = {
  "environment": z.string().describe("Environment name or 'all' for all environments").optional(),
  "prefix": z.union([z.string(), z.null()]).describe("Filter secrets by prefix (e.g., 'platform/')").optional()
}