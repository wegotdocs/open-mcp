import { z } from "zod"

export const inputParamsSchema = {
  "installment": z.string().describe("ID of the installment to be anticipated").optional(),
  "payment": z.string().describe("ID of the payment to be anticipated").optional()
}