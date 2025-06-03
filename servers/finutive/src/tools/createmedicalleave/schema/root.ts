import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "user_id": z.string().optional(),
  "medical_part": z.string().optional(),
  "accident_cause": z.string().optional()
}