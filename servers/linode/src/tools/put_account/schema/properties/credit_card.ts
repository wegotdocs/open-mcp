import { z } from "zod"

export const inputParams = {
  "expiry": z.string().describe("The expiration month and year of the `credit_card`.").optional(),
  "last_four": z.string().describe("The last four digits of the `credit_card` assigned to this account.").optional()
}