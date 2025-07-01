import { z } from "zod"

export const inputParamsSchema = {
  "creditCardAutomaticEnabled": z.boolean().describe("Define whether automatic anticipation is enabled for credit card payments").optional()
}