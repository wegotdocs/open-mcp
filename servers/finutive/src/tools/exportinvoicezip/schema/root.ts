import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "type": z.string(),
  "skip_exceptions": z.boolean().optional(),
  "ids": z.array(z.string()).optional(),
  "include_individual": z.boolean().optional(),
  "zip_pdfs": z.boolean().optional()
}