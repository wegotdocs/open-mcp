import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "message": z.string().optional(),
  "status": z.string().optional()
}