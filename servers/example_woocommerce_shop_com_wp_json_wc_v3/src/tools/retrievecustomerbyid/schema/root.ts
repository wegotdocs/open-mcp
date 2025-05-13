import { z } from "zod"

export const inputParamsSchema = {
  "customerId": z.number().int().describe("ID of customer to return")
}