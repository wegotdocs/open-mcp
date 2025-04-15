import { z } from "zod"

export const inputParamsSchema = {
  "client": z.string().describe("App or oauth client name").optional(),
  "dateFrom": z.string().describe("From (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp").optional(),
  "dateTo": z.string().describe("To (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp").optional(),
  "direction": z.string().describe("The direction to sort events by (asc or desc)").optional(),
  "first": z.number().int().describe("Paging offset").optional(),
  "ipAddress": z.string().describe("IP Address").optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional(),
  "type": z.array(z.string()).describe("The types of events to return").optional(),
  "user": z.string().describe("User id").optional()
}