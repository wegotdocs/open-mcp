import { z } from "zod"

export const inputParamsSchema = {
  "iban": z.string().min(15).max(34).describe("International Bank Account Number (IBAN).").optional()
}