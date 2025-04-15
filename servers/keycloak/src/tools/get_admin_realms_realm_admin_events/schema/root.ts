import { z } from "zod"

export const inputParamsSchema = {
  "authClient": z.string().optional(),
  "authIpAddress": z.string().optional(),
  "authRealm": z.string().optional(),
  "authUser": z.string().describe("user id").optional(),
  "dateFrom": z.string().describe("From (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp").optional(),
  "dateTo": z.string().describe("To (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp").optional(),
  "direction": z.string().describe("The direction to sort events by (asc or desc)").optional(),
  "first": z.number().int().optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional(),
  "operationTypes": z.array(z.string()).optional(),
  "resourcePath": z.string().optional(),
  "resourceTypes": z.array(z.string()).optional()
}