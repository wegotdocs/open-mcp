import { z } from "zod"

export const inputParamsSchema = {
  "path_prefix": z.union([z.string(), z.null()]).describe("Filter roles by path prefix (e.g., '/service-role/')").optional(),
  "max_items": z.number().int().gte(1).lte(500).describe("Maximum number of roles to return").optional()
}