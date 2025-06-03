import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "transaction_id": z.string().describe("Transaction ID"),
  "category_id": z.string().describe("Category ID")
}