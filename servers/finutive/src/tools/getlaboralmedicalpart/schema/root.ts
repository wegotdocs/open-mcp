import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "medical_part_id": z.string()
}