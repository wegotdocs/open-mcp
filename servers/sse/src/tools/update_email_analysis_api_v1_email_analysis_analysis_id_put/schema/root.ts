import { z } from "zod"

export const inputParamsSchema = {
  "analysis_id": z.string(),
  "assigned_label": z.union([z.string(), z.null()]).optional(),
  "priority_level": z.union([z.string().regex(new RegExp("^(high|medium|low)$")), z.null()]).optional(),
  "suggested_action": z.union([z.string(), z.null()]).optional(),
  "confidence_score": z.union([z.number().int().gte(0).lte(100), z.null()]).optional()
}