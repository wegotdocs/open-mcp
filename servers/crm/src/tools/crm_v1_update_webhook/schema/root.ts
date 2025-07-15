import { z } from "zod"

export const inputParamsSchema = {
  "event_type": z.string().optional(),
  "http_method": z.string().optional(),
  "url": z.string().optional()
}