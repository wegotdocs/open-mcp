import { z } from "zod"

export const inputParamsSchema = {
  "new_password1": z.string().max(128),
  "new_password2": z.string().max(128),
  "uid": z.string(),
  "token": z.string()
}