import { z } from "zod"

export const inputParamsSchema = {
  "databaseId": z.string(),
  "Pagination": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Pagination` to the tool, first call the tool `expandSchema` with \"/properties/Pagination\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination parameter</property-description>").optional(),
  "recordIds": z.array(z.string()).describe("Items filter parameter").optional(),
  "filter": z.string().describe("Filter parameter").optional(),
  "searchQuery": z.string().describe("Search query by all fields. Special characters (\", <> etc. must be escaped). The value is ignored if items filter is provided").optional(),
  "fieldIds": z.array(z.string()).describe("Columns (properties) to be loaded in the result").optional()
}