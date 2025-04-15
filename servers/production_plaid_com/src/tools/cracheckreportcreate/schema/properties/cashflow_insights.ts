import { z } from "zod"

export const inputParamsSchema = {
  "plaid_check_score_version": z.enum(["v1.0","v2.0"]).nullable().describe("The version of the Plaid Check Score").optional(),
  "attributes_version": z.literal("v1.0").nullable().describe("The version of cashflow attributes").optional()
}