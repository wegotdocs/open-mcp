import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string(),
  "email": z.string().email(),
  "password": z.string().min(6),
  "password_confirmation": z.string().min(6)
}