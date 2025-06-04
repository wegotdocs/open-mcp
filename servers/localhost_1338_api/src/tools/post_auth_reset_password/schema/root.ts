import { z } from "zod"

export const inputParamsSchema = {
  "password": z.string().optional(),
  "passwordConfirmation": z.string().optional(),
  "code": z.string().optional()
}