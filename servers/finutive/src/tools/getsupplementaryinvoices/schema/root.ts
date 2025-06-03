import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().optional(),
  "emission_start_date": z.string().datetime({ offset: true }).optional(),
  "emission_end_date": z.string().datetime({ offset: true }).optional(),
  "register_start_date": z.string().datetime({ offset: true }).optional(),
  "register_end_date": z.string().datetime({ offset: true }).optional(),
  "status": z.string().optional(),
  "type": z.string().optional(),
  "start": z.number().int().optional(),
  "length": z.number().int().optional()
}