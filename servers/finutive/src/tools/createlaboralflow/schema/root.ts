import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "element_type": z.string().optional(),
  "element_id": z.string().optional(),
  "flow": z.string().optional()
}