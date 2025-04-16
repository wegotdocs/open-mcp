import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "label": z.string().nullable().optional()
}