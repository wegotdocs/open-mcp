import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional()
}