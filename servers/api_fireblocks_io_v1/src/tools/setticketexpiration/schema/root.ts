import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "expiresIn": z.number().gte(1).lte(48).describe("Sets ticket expiration time (in hours) after a ticket is submitted. If no funding source is set to any term, the ticket will automatically expire after given time."),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}