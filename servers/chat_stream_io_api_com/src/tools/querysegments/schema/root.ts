import { z } from "zod"

export const inputParamsSchema = {
  "filter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `filter` to the tool, first call the tool `expandSchema` with \"/properties/filter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Filter to apply to the query</property-description>"),
  "limit": z.number().int().gte(0).lte(100).optional(),
  "next": z.string().optional(),
  "prev": z.string().optional(),
  "sort": z.array(z.object({ "direction": z.number().int().describe("Direction of sorting, 1 for Ascending, -1 for Descending, default is 1").optional(), "field": z.string().describe("Name of field to sort by").optional() }).nullable()).describe("Array of sort parameters").optional()
}