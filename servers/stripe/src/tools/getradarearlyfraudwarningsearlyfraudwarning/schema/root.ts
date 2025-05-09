import { z } from "zod"

export const inputParamsSchema = {
  "early_fraud_warning": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}