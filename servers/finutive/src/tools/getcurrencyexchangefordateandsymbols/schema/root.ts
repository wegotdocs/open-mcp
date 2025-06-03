import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().date().describe("Date for which exchange rates are required (ISO format: YYYY-MM-DD)"),
  "base_currency": z.string().describe("ISO code of the base currency"),
  "currencies": z.array(z.string()).describe("List of ISO currency codes for which exchange rates are required")
}