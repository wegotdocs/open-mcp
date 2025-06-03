import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().optional(),
  "search": z.string().optional()
}