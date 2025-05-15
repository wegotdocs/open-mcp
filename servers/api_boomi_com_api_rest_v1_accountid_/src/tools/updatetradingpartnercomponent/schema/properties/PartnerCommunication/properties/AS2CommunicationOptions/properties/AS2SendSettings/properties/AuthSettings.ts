import { z } from "zod"

export const inputParamsSchema = {
  "password": z.string().optional(),
  "user": z.string().optional()
}