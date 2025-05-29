import { z } from "zod"

export const inputParamsSchema = {
  "databaseId": z.string(),
  "recordId": z.string(),
  "fieldIds": z.array(z.string()).describe("Columns (properties) to be loaded in the result").optional(),
  "title": z.string(),
  "fieldValues": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fieldValues` to the tool, first call the tool `expandSchema` with \"/properties/fieldValues\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}