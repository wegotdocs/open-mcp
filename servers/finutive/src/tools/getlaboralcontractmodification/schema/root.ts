import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "modification_id": z.string()
}