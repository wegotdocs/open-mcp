import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.number().int(),
  "password": z.string(),
  "repeat_password": z.string()
}