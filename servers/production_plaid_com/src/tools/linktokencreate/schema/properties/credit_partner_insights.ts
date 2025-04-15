import { z } from "zod"

export const inputParamsSchema = {
  "days_requested": z.number().int().gte(1).lte(730).describe("The maximum integer number of days of history to compute Credit Partner Insights. Defaults to 180 if not specified").optional(),
  "prism_products": z.array(z.enum(["insights","scores"]).describe("The Prism products that can be returned by the Plaid API")).describe("The specific Prism products to return. If none are passed in, then all products will be returned.").optional()
}