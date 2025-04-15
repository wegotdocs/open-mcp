import { z } from "zod"

export const inputParamsSchema = {
  "payment_id": z.string().nullable().describe("A unique ID identifying the payment").optional(),
  "consent_id": z.string().nullable().describe("A unique ID identifying the payment consent").optional()
}