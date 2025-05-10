import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional()
}