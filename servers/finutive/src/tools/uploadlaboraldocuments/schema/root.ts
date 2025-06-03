import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "flow_id": z.string(),
  "documents": z.array(z.string()).optional(),
  "button": z.string().optional()
}