import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().optional(),
  "pageable": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pageable` to the tool, first call the tool `expandSchema` with \"/properties/pageable\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination information</property-description>"),
  "managers_ids": z.array(z.string()).describe("List of manager IDs to filter by").optional(),
  "services_ids": z.array(z.string()).describe("List of service IDs to filter by").optional()
}