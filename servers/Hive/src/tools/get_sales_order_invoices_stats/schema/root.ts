import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}