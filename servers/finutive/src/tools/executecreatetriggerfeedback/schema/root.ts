import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "trigger_id": z.string().describe("Trigger ID"),
  "view": z.string().optional(),
  "feedback": z.boolean().optional()
}