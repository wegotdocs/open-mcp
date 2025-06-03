import { z } from "zod"

export const inputParamsSchema = {
  "pageable": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pageable` to the tool, first call the tool `expandSchema` with \"/properties/pageable\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination information, defaults to 20 items per page</property-description>"),
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