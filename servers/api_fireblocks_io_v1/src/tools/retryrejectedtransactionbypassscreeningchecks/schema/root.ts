import { z } from "zod"

export const inputParamsSchema = {
  "txId": z.string().describe("The transaction id that was rejected by screening checks"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}