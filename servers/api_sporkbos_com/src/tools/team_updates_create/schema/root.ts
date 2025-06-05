import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly(),
  "team": z.number().int(),
  "note": z.string(),
  "created_by": z.string(),
  "created_at": z.string().datetime({ offset: true }).readonly()
}