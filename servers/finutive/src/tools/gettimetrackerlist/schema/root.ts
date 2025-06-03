import { z } from "zod"

export const inputParamsSchema = {
  "manager_ids": z.array(z.string()).optional(),
  "start_date": z.string().datetime({ offset: true }),
  "end_date": z.string().datetime({ offset: true })
}