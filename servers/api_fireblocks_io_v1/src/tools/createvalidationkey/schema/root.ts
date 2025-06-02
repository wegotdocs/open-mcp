import { z } from "zod"

export const inputParamsSchema = {
  "publicKeyPem": z.string().describe("The PEM encoded public key of the validation key being added"),
  "daysTillExpired": z.number().gte(1).describe("The number of days from the date the validation key was added until it expires"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}