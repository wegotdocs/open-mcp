import { z } from "zod"

export const inputParamsSchema = {
  "created": z.string().datetime({ offset: true }).optional(),
  "description": z.string().optional(),
  "id": z.string().uuid().optional(),
  "name": z.string(),
  "updated": z.string().datetime({ offset: true }).optional()
}