import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "type": z.string().nullable().optional(),
  "label": z.string().nullable().optional(),
  "filters": z.array(z.record(z.any())).nullable().optional()
}