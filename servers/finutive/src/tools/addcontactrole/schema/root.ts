import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().optional(),
  "business_contact_id": z.string().optional(),
  "role": z.string().optional()
}