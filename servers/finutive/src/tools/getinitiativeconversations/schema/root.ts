import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("ID of the business"),
  "pageable": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pageable` to the tool, first call the tool `expandSchema` with \"/properties/pageable\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination parameters</property-description>"),
  "responsible": z.string().describe("Filter by responsible person ID").optional(),
  "service": z.string().describe("Filter by service ID").optional(),
  "status": z.enum(["OPEN","PENDING","UNREAD","READ","CLOSED"]).describe("Filter by conversation status").optional(),
  "saved": z.boolean().describe("Filter by saved state").optional(),
  "element_type": z.string().describe("Filter by element type").optional(),
  "element_id": z.string().describe("Filter by element ID").optional()
}