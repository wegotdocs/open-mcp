import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "document_id": z.string(),
  "inline": z.boolean().optional()
}