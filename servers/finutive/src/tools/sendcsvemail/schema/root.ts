import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "content": z.string().describe("Email content/body text"),
  "csv_id": z.string().describe("ID of the CSV file to be sent").optional(),
  "period": z.string().describe("Period of the census statement (e.g., '2025m8', '2025m7')").optional()
}