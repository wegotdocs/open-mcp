import { z } from "zod"

export const inputParamsSchema = {
  "sort": z.string().describe("Sort by attributes ascending (asc) or descending (desc)").optional(),
  "pagination[withCount]": z.boolean().describe("Return page/pageSize (default: true)").optional(),
  "pagination[page]": z.number().int().describe("Page number (default: 0)").optional(),
  "pagination[pageSize]": z.number().int().describe("Page size (default: 25)").optional(),
  "pagination[start]": z.number().int().describe("Offset value (default: 0)").optional(),
  "pagination[limit]": z.number().int().describe("Number of entities to return (default: 25)").optional(),
  "fields": z.string().describe("Fields to return (ex: title,author)").optional(),
  "populate": z.string().describe("Relations to return").optional(),
  "filters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `filters` to the tool, first call the tool `expandSchema` with \"/properties/filters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Filters to apply</property-description>").optional(),
  "locale": z.string().describe("Locale to apply").optional()
}