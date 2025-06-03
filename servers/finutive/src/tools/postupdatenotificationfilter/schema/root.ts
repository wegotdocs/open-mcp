import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "update_notification": z.string().optional(),
  "name": z.string().optional(),
  "active": z.boolean().optional(),
  "filter_type": z.string().optional(),
  "filter_value": z.string().optional(),
  "extra_value": z.string().optional()
}