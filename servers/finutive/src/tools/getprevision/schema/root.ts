import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "start_date": z.string().datetime({ offset: true }).describe("Start date for tax prevision").optional(),
  "end_date": z.string().datetime({ offset: true }).describe("End date for tax prevision").optional(),
  "period": z.string().describe("Period type (monthly, quarterly, yearly)").optional(),
  "account": z.string().describe("Account filter (all or specific account)").optional()
}