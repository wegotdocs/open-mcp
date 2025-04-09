import { z } from "zod"

export const inputParams = {
  "client": z.string().describe("App or oauth client name").optional(),
  "dateFrom": z.string().describe("From date").optional(),
  "dateTo": z.string().describe("To date").optional(),
  "first": z.number().int().describe("Paging offset").optional(),
  "ipAddress": z.string().describe("IP Address").optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional(),
  "type": z.array(z.string()).describe("The types of events to return").optional(),
  "user": z.string().describe("User id").optional()
}