import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}