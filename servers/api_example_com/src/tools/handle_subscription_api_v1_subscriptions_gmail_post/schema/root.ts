import { z } from "zod"

export const inputParamsSchema = {
  "service": z.literal("gmail"),
  "user_id": z.string()
}