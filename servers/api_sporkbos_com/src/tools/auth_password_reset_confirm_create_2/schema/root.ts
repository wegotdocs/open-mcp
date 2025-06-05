import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string(),
  "uidb64": z.string(),
  "new_password1": z.string().max(128),
  "new_password2": z.string().max(128),
  "uid": z.string(),
  "b_token": z.string(),
  "accepted_policies": z.boolean().optional(),
  "required_reset_password": z.boolean().optional()
}