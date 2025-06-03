import { z } from "zod"

export const inputParamsSchema = {
  "first_name": z.string(),
  "last_name": z.string(),
  "login": z.string(),
  "phone_number": z.union([z.string(), z.null()]).optional()
}