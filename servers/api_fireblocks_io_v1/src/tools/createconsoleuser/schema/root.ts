import { z } from "zod"

export const inputParamsSchema = {
  "firstName": z.string().describe("users firstName"),
  "lastName": z.string().describe("users lastName"),
  "role": z.string().describe("users role"),
  "email": z.string().describe("valid email address"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}