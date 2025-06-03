import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "flow_id": z.string(),
  "actual_step": z.string().optional(),
  "next_step": z.string().optional(),
  "value": z.string().optional(),
  "toggles": z.string().optional(),
  "manager_tips": z.string().optional(),
  "no_send_notification": z.boolean().optional(),
  "date": z.string().datetime({ offset: true }).optional(),
  "linked_file": z.string().optional()
}