import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string(),
  "name": z.string().optional(),
  "color": z.string().optional()
}