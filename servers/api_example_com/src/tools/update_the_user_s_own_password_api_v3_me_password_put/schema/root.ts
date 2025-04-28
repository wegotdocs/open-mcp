import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "old_password": z.string(),
  "new_password": z.string()
}