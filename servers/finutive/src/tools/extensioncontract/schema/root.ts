import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "contract_id": z.string(),
  "observations": z.string().optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "id": z.string().optional()
}