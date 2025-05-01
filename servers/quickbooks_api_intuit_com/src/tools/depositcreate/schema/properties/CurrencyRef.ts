import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().describe("A three letter string representing the ISO 4217 code for the currency. For example, USD, AUD, EUR, and so on.").optional(),
  "name": z.string().describe("The full name of the currency.").optional()
}