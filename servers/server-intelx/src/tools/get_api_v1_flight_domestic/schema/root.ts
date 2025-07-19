import { z } from "zod"

export const inputParamsSchema = {
  "category": z.string().optional(),
  "limit": z.number().int().optional(),
  "flight_date": z.string().optional()
}