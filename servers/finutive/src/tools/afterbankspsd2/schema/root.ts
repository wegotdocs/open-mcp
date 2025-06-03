import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "service": z.string().optional(),
  "products": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "action": z.string().optional()
}