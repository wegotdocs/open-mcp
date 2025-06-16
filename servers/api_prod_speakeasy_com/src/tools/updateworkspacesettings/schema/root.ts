import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.string().optional(),
  "webhook_url": z.string().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "updated_at": z.string().datetime({ offset: true }).optional()
}