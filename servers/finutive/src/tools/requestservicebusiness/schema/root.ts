import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "service_id": z.string().describe("Service ID"),
  "trigger_id": z.string().optional()
}