import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.array(z.string()).describe("Business IDs to query"),
  "start_date": z.string().date().describe("Start date of the range"),
  "end_date": z.string().date().describe("End date of the range"),
  "pageable": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pageable` to the tool, first call the tool `expandSchema` with \"/properties/pageable\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination configuration</property-description>")
}