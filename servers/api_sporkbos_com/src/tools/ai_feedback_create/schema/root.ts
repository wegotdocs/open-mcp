import { z } from "zod"

export const inputParamsSchema = {
  "ai_context": z.string(),
  "team_id": z.number().int()
}