import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional()
}