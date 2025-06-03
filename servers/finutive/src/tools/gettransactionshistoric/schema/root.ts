import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "start_date": z.string().datetime({ offset: true }).describe("Start date filter").optional(),
  "end_date": z.string().datetime({ offset: true }).describe("End date filter").optional(),
  "start_amount": z.number().int().describe("Minimum amount").optional(),
  "end_amount": z.number().int().describe("Maximum amount").optional(),
  "accounts": z.string().describe("Account IDs to filter").optional(),
  "size": z.number().int().describe("Number of items to return").optional(),
  "offset": z.number().int().describe("Number of items to skip").optional(),
  "select_all": z.number().int().describe("Select all flag").optional()
}