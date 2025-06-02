import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "expiresIn": z.number().gte(1).lte(48).describe("Sets the ticket expiration time (in hours) after the ticket is submitted. If no funding source is set for any term, the ticket will automatically expire after given time. If expiresIn is not sent ticket will not expire.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}