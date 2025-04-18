import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().describe("Description of the gist").optional(),
  "files": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `files` to the tool, first call the tool `expandSchema` with \"/properties/files\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Names and content for the files that make up the gist</property-description>"),
  "public": z.boolean().describe("Flag indicating whether the gist is public").optional()
}