import { z } from "zod"

export const inputParams = {
  "interval": z.enum(["day","month","week","year"]).optional(),
  "meter": z.string().max(5000).optional(),
  "usage_type": z.enum(["licensed","metered"]).optional()
}