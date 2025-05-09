import { z } from "zod"

export const inputParamsSchema = {
  "action": z.union([z.string(), z.null()]).optional(),
  "scope_type": z.union([z.string(), z.null()]).optional(),
  "scope_id": z.union([z.string().uuid(), z.null()]).optional(),
  "resource_type": z.union([z.string(), z.null()]).optional(),
  "resource_id": z.union([z.string().uuid(), z.null()]).optional()
}