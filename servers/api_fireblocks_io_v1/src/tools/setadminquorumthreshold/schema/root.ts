import { z } from "zod"

export const inputParamsSchema = {
  "adminQuorumThreshold": z.number().describe("The number of admins that will requires to approve an operation").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}