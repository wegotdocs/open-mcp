import { z } from "zod"

export const inputParamsSchema = {
  "paymentRequestId": z.string().uuid().describe("Payment request primary identifier")
}