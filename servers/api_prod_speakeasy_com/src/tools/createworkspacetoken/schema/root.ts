import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "name": z.string(),
  "workspace_id": z.string(),
  "alg": z.string(),
  "key": z.string(),
  "last_used": z.string().datetime({ offset: true }).nullable().optional(),
  "created_at": z.string().datetime({ offset: true }),
  "created_by": z.string().nullable().optional(),
  "created_by_name": z.string().nullable().optional(),
  "created_by_photo_url": z.string().nullable().optional(),
  "email": z.string().nullable().optional()
}