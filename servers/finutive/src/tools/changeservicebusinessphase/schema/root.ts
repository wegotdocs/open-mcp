import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string().describe("Service ID"),
  "business_id": z.string().describe("Business ID"),
  "file_id": z.string().optional(),
  "phase": z.string().optional(),
  "comment": z.string().optional()
}