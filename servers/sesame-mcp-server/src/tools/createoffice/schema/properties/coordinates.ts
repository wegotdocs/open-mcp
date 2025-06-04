import { z } from "zod"

export const inputParamsSchema = {
  "latitude": z.number().optional(),
  "longitude": z.number().optional()
}