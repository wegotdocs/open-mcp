import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().describe("The token identifier string").readonly().optional(),
  "username": z.string().describe("The token's username"),
  "password": z.string().describe("The token's password (write-only)"),
  "credentialId": z.string().optional(),
  "customerId": z.string().optional(),
  "expiredTime": z.string().datetime({ offset: true }).describe("Token's expired time").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}