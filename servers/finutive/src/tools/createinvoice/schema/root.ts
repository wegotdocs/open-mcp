import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "internal_billing_id": z.string()
}