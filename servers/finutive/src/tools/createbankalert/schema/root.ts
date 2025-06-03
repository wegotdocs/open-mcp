import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "id": z.string().optional(),
  "type": z.string().optional()
}