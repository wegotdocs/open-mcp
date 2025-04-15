import { z } from "zod"

export const inputParams = {
  "format": z.enum(["legacy","agenta"]).optional(),
  "focus": z.union([z.string(), z.null()]).optional(),
  "oldest": z.union([z.string(), z.null()]).optional(),
  "newest": z.union([z.string(), z.null()]).optional(),
  "window": z.union([z.number().int(), z.null()]).optional(),
  "filtering": z.union([z.string(), z.null()]).optional(),
  "timeRange": z.union([z.string(), z.null()]).optional(),
  "app_id": z.union([z.string(), z.null()]).optional(),
  "environment": z.union([z.string(), z.null()]).optional(),
  "variant": z.union([z.string(), z.null()]).optional()
}