import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(255),
  "scheduled_for": z.string().datetime({ offset: true }).optional(),
  "stop_at": z.string().datetime({ offset: true }).optional()
}