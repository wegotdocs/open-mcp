import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "externalRefId": z.string().min(5).max(64).describe("Each workspace can set their own external id they want to refer to this Ticket"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}