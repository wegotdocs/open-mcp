import { z } from "zod"

export const inputParamsSchema = {
  "deal_custom_fields": z.array(z.object({ "custom_field_id": z.string().optional(), "value": z.union([z.string().nullable(), z.array(z.string())]).optional() })).optional(),
  "deal_lost_note": z.string().nullable().optional(),
  "deal_lost_reason_id": z.string().nullable().optional(),
  "hold": z.boolean().nullable().optional(),
  "name": z.string().optional(),
  "organization_id": z.string().optional(),
  "prediction_date": z.string().date().nullable().optional(),
  "rating": z.number().optional(),
  "user_id": z.string().optional(),
  "win": z.boolean().nullable().optional()
}