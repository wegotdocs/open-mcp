import { z } from "zod"

export const inputParamsSchema = {
  "user": z.string().optional(),
  "pass": z.string().optional(),
  "documentType": z.number().optional(),
  "pass2": z.string().optional(),
  "otp": z.string().optional(),
  "session_id": z.string().optional(),
  "counterId": z.number().optional()
}