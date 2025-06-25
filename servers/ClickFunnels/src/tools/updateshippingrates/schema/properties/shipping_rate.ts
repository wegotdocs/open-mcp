import { z } from "zod"

export const inputParamsSchema = {
  "provider_name": z.union([z.string().describe("Provider Name"), z.null().describe("Provider Name")]).describe("Provider Name").optional(),
  "price": z.string().describe("Price").optional(),
  "price_currency": z.string().describe("Price Currency").optional(),
  "rates_name_id": z.number().int().describe("Rate name ID").optional(),
  "live_rates_provider": z.literal("Shippo").describe("Live Rates Provider").optional()
}