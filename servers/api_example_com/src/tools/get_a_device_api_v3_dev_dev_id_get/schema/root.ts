import { z } from "zod"

export const inputParamsSchema = {
  "dev_id": z.number().int(),
  "session_id": z.string().optional()
}