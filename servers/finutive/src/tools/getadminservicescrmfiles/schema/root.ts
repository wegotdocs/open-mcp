import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string(),
  "phase": z.string().optional(),
  "search": z.string().optional(),
  "size": z.number().int(),
  "from": z.number().int(),
  "paid": z.boolean().optional(),
  "responsible_id": z.string().optional(),
  "deal_labels": z.string().optional(),
  "deal_labels_out": z.string().optional(),
  "service_tags": z.string().optional(),
  "service_tags_out": z.string().optional(),
  "files": z.string().optional(),
  "start_date_last_change": z.string().datetime({ offset: true }).optional(),
  "end_date_last_change": z.string().datetime({ offset: true }).optional()
}