import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of the payment or installment for which the chargeback will be retrieved.")
}