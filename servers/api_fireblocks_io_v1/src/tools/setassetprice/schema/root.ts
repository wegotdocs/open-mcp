import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the asset"),
  "currency": z.string().describe("Currency (according to ISO 4217 currency codes)"),
  "price": z.number().describe("Price in currency"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}