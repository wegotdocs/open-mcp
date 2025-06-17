import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().describe("The token's identifier string").readonly().optional(),
  "username": z.string().describe("The token's username"),
  "password": z.string().describe("Token's password (only for POST)"),
  "credential": z.string().describe("Token's credential ID").optional(),
  "expiredTime": z.string().datetime({ offset: true }).describe("Password expired time").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}