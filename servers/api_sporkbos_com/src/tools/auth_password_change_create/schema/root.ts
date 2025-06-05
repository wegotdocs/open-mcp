import { z } from "zod"

export const inputParamsSchema = {
  "old_password": z.string().max(128),
  "new_password1": z.string().max(128),
  "new_password2": z.string().max(128)
}