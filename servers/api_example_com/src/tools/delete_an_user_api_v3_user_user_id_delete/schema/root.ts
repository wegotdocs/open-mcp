import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.number().int(),
  "session_id": z.string().optional()
}