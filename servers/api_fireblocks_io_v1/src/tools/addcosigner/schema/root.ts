import { z } from "zod"

export const inputParamsSchema = {
  "apiKeyId": z.string().uuid().describe("The id of the API key to be paired with the cosigner"),
  "name": z.string().min(1).describe("The name of the cosigner"),
  "existingCosigner": z.boolean().describe("Whether the cosigner already exists in another workspace").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}