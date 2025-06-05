import { z } from "zod"

export const inputParamsSchema = {
  "payment_method_id": z.string().describe("The payment method ID to be set as default.")
}