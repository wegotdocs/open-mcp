import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().gte(0).describe("Interest value"),
  "type": z.literal("PERCENTAGE").describe("Type of interest calculation")
}