import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "deal_label_ids": z.array(z.string().describe("Set of deal label IDs to associate with the business")).describe("Set of deal label IDs to associate with the business"),
  "gclid": z.string().describe("Google Click ID for tracking purposes").optional(),
  "one_off": z.number().int().describe("One-off value for the business deal").optional(),
  "monthly_value": z.number().int().describe("Monthly recurring value for the business deal").optional()
}