import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "user_id": z.string().describe("User ID"),
  "alternative_emails": z.string().optional()
}