import { z } from "zod"

export const inputParamsSchema = {
  "password": z.string().optional(),
  "totp_code": z.string().optional(),
  "username": z.string().optional()
}