import { z } from "zod"

export const inputParamsSchema = {
  "folderId": z.string(),
  "Pagination": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Pagination` to the tool, first call the tool `expandSchema` with \"/properties/Pagination\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination parameter</property-description>").optional(),
  "databaseIds": z.array(z.string()).describe("Databases filter parameter").optional()
}