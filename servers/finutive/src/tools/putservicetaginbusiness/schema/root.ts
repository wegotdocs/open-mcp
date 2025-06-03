import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string(),
  "business_id": z.string(),
  "tag_id": z.string(),
  "file_id": z.string().optional()
}