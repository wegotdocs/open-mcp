import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "user_id": z.number().int(),
  "approved": z.boolean()
}