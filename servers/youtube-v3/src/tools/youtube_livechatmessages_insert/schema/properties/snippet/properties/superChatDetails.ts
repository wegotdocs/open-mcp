import { z } from "zod"

export const inputParamsSchema = {
  "amountDisplayString": z.string().describe("A rendered string that displays the fund amount and currency to the user.").optional(),
  "amountMicros": z.string().describe("The amount purchased by the user, in micros (1,750,000 micros = 1.75).").optional(),
  "currency": z.string().describe("The currency in which the purchase was made.").optional(),
  "tier": z.number().int().describe("The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.").optional(),
  "userComment": z.string().describe("The comment added by the user to this Super Chat event.").optional()
}