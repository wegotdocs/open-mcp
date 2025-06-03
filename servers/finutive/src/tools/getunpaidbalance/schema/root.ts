import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "start_date": z.string().datetime({ offset: true }).describe("Start date for unpaid analysis").optional(),
  "end_date": z.string().datetime({ offset: true }).describe("End date for unpaid analysis").optional()
}