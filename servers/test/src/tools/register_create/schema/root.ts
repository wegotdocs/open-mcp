import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().max(255),
  "last_name": z.string().max(255),
  "user_name": z.string().max(255),
  "personal_number": z.string(),
  "cityzen": z.string(),
  "mobile": z.string(),
  "birth_day": z.string(),
  "email": z.string().email().max(255),
  "password": z.string().min(8),
  "password_confirmation": z.string().min(8)
}