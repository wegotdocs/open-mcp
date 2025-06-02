import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the initiated Web3 connection to approve."),
  "approve": z.boolean().describe("Approval of the initiated Web3 connection."),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}