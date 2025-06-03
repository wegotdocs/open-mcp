import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "company_constitution_date": z.string().datetime({ offset: true }).optional(),
  "start_company_date": z.string().datetime({ offset: true }).optional()
}