import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "parent_id": z.string().optional(),
  "name": z.string().optional()
}