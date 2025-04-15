import { z } from "zod"

export const inputParamsSchema = {
  "iso_currency_code": z.literal("USD").describe("An ISO-4217 currency code."),
  "value": z.number().describe("The amount value.\nThis value can be 0 to indicate no money was lost.\nMust not contain more than two digits of precision (e.g., `1.23`).")
}