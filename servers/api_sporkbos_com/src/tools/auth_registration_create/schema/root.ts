import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email(),
  "password1": z.string(),
  "password2": z.string(),
  "accepted_policies": z.boolean()
}