import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().optional(),
  "deal_id": z.string().optional(),
  "done": z.boolean().optional(),
  "hour": z.string().optional(),
  "notes": z.string().optional(),
  "subject": z.string().optional(),
  "type": z.string().optional(),
  "user_ids": z.array(z.string()).optional()
}