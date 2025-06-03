import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().optional()
}