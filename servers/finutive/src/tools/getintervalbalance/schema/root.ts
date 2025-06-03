import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "start_date": z.string().datetime({ offset: true }).describe("Start date for the interval").optional(),
  "end_date": z.string().datetime({ offset: true }).describe("End date for the interval").optional()
}