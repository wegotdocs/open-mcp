import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(255),
  "Filter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Filter` to the tool, first call the tool `expandSchema` with \"/properties/Filter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "Sort": z.array(z.object({ "direction": z.number().int().describe("Direction of sorting, 1 for Ascending, -1 for Descending, default is 1").optional(), "field": z.string().describe("Name of field to sort by").optional() }).nullable()).optional(),
  "limit": z.number().int().gte(0).lte(10000).describe("Limit").optional(),
  "next": z.string().describe("Next").optional(),
  "prev": z.string().describe("Prev").optional()
}