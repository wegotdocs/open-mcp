import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID filter").optional(),
  "pageable": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pageable` to the tool, first call the tool `expandSchema` with \"/properties/pageable\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination information</property-description>"),
  "start_date": z.string().datetime({ offset: true }).describe("Start date filter").optional(),
  "end_date": z.string().datetime({ offset: true }).describe("End date filter").optional(),
  "view_more": z.number().int().describe("View more results flag").optional()
}