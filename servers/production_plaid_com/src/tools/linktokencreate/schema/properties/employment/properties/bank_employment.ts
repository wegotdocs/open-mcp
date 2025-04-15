import { z } from "zod"

export const inputParamsSchema = {
  "days_requested": z.number().int().describe("The number of days of data to request for the Bank Employment product.")
}