import { z } from "zod"

export const inputParamsSchema = {
  "product": z.string().optional(),
  "otp": z.string().optional(),
  "session_id": z.string().optional(),
  "counterId": z.number().optional()
}