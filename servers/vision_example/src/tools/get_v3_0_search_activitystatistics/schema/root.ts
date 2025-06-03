import { z } from "zod"

export const inputParamsSchema = {
  "period": z.enum(["24h","7d","30d"]).describe("The time period for the Trend Vision One connected product status. Default: 7 days.").optional()
}