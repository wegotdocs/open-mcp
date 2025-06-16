import { z } from "zod"

export const inputParamsSchema = {
  "created_at": z.string().datetime({ offset: true }),
  "id": z.string(),
  "name": z.string(),
  "organization_id": z.string(),
  "slug": z.string(),
  "inactive": z.boolean().optional(),
  "updated_at": z.string().datetime({ offset: true }),
  "verified": z.boolean()
}