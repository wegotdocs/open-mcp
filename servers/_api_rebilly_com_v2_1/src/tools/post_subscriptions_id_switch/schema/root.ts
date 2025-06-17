import { z } from "zod"

export const inputParamsSchema = {
  "planId": z.string(),
  "policy": z.enum(["at-next-renewal","now-with-prorata-credit","now"]).describe("Switch policy"),
  "websiteId": z.string().optional(),
  "quantity": z.number().int().describe("Quantity for each subscription. Default value to 1").optional()
}