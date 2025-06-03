import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "opt": z.number().int().describe("Optional OTP code").optional()
}