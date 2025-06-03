import { z } from "zod"

export const inputParamsSchema = {
  "timetracker_id": z.string().optional()
}