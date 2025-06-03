import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "title": z.string().optional(),
  "description": z.string().optional(),
  "button_text": z.string().optional(),
  "link": z.string().optional(),
  "expires": z.boolean().optional(),
  "active_until": z.string().datetime({ offset: true }).optional(),
  "visible_since": z.string().datetime({ offset: true }).optional(),
  "all_businesses": z.boolean().optional(),
  "businesses": z.array(z.string()).optional()
}