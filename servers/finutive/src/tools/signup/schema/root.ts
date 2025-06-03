import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().min(0).max(255),
  "first_name": z.string().min(0).max(255),
  "last_name": z.string().min(0).max(255),
  "business_name": z.string().min(0).max(255)
}