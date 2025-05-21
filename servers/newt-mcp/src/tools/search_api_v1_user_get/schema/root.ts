import { z } from "zod"

export const inputParamsSchema = {
  "created_after": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "created_before": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "enabled": z.union([z.boolean(), z.null()]).optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "name_contains": z.union([z.string(), z.null()]).optional(),
  "offset": z.number().int().gte(0).optional(),
  "updated_after": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "updated_before": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "username_contains": z.union([z.string(), z.null()]).optional()
}