import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "field": z.string().describe("Field name to update"),
  "value": z.string().optional()
}