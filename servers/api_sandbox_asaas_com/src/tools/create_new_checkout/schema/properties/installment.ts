import { z } from "zod"

export const inputParamsSchema = {
  "maxInstallmentCount": z.number().int().gte(1).lte(21).describe("Maximum number of installments").optional()
}