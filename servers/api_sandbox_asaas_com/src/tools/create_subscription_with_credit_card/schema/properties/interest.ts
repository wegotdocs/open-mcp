import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("Percentage of interest per month on the amount charged for payment after maturity").optional()
}