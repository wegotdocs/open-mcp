import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string(),
  "conversation_history": z.array(z.record(z.string())).optional()
}