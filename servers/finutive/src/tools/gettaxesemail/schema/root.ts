import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "period": z.string().describe("Period"),
  "type": z.string().describe("Type")
}