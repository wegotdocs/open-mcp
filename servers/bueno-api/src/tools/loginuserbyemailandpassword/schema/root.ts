import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email().optional(),
  "password": z.string().optional()
}