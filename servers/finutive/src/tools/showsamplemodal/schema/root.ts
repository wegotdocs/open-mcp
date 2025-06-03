import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "show_modal": z.boolean().optional(),
  "show_official_invoice": z.boolean().optional()
}