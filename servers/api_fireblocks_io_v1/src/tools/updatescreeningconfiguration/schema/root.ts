import { z } from "zod"

export const inputParamsSchema = {
  "disableBypass": z.boolean().describe("Flag to enable or disable bypass screening on tenant configuration.").optional(),
  "disableUnfreeze": z.boolean().describe("Flag to enable or disable unfreeze of transaction frozen by policy rule on tenant configuration.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}