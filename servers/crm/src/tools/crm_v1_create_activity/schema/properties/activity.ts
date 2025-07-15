import { z } from "zod"

export const inputParamsSchema = {
  "deal_id": z.string().optional(),
  "text": z.string().optional(),
  "user_id": z.string().optional()
}