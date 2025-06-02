import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("the wallet's display name").optional(),
  "customerRefId": z.string().describe("Optional - Sets a customer reference ID").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}