import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Filter by business ID").optional(),
  "responsible_id": z.string().describe("Filter by responsible person ID").optional(),
  "service_id": z.string().describe("Filter by service ID").optional(),
  "status": z.enum(["OPEN","PENDING","UNREAD","READ","CLOSED"]).describe("Filter by conversation status").optional(),
  "saved": z.boolean().describe("Filter by saved conversations").optional(),
  "proactive": z.boolean().describe("Filter by proactive conversations").optional(),
  "element_type": z.string().describe("Filter by element type").optional(),
  "element_id": z.string().describe("Filter by element ID").optional(),
  "start_date": z.string().describe("Filter by start date (format: yyyy-MM-dd)").optional(),
  "end_date": z.string().describe("Filter by end date (format: yyyy-MM-dd)").optional()
}