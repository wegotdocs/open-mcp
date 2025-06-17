import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "username": z.string().describe("Credential's username"),
  "password": z.string().describe("The credential's password"),
  "customerId": z.string().describe("The credential's customer ID"),
  "expiredTime": z.string().datetime({ offset: true }).describe("The credential's expired time").optional(),
  "_links": z.array(z.union([z.string(), z.string()])).min(1).max(2).describe("The links related to resource").readonly().optional()
}