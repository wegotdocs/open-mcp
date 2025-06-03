import { z } from "zod"

export const inputParamsSchema = {
  "newEmail": z.string().optional(),
  "password": z.string().optional()
}