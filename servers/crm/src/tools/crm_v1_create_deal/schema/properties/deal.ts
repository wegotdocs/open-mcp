import { z } from "zod"

export const inputParamsSchema = {
  "deal_custom_fields": z.array(z.object({ "custom_field_id": z.string().optional(), "value": z.union([z.string(), z.array(z.string())]).optional() })).optional(),
  "deal_stage_id": z.string().optional(),
  "name": z.string().optional(),
  "prediction_date": z.string().date().nullable().optional(),
  "rating": z.number().optional(),
  "user_id": z.string().optional()
}