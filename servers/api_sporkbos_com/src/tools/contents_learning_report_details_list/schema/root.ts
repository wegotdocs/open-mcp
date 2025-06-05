import { z } from "zod"

export const inputParamsSchema = {
  "content": z.string().optional(),
  "learning_status": z.enum(["complete","complete_optional","complete_required","required"]),
  "team": z.number().int(),
  "user": z.number().int().optional()
}