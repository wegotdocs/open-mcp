import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "request_id": z.string().optional(),
  "service_id": z.string().optional()
}