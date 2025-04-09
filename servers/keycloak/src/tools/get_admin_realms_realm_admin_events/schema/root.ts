import { z } from "zod"

export const inputParams = {
  "authClient": z.string().optional(),
  "authIpAddress": z.string().optional(),
  "authRealm": z.string().optional(),
  "authUser": z.string().describe("user id").optional(),
  "dateFrom": z.string().optional(),
  "dateTo": z.string().optional(),
  "first": z.number().int().optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional(),
  "operationTypes": z.array(z.string()).optional(),
  "resourcePath": z.string().optional(),
  "resourceTypes": z.array(z.string()).optional()
}