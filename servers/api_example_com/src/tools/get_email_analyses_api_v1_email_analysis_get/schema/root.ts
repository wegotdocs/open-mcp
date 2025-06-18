import { z } from "zod"

export const inputParamsSchema = {
  "skip": z.number().int().gte(0).optional(),
  "limit": z.number().int().gte(1).lte(1000).optional(),
  "priority_level": z.union([z.string().regex(new RegExp("^(high|medium|low)$")), z.null()]).optional(),
  "assigned_label": z.union([z.string(), z.null()]).optional(),
  "user_id": z.string().describe("User ID")
}