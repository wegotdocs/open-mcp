import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "phone": z.string().optional(),
  "email": z.string().optional(),
  "name": z.string().optional()
}