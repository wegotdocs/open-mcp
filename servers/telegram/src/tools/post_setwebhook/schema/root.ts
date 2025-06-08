import { z } from "zod"

export const inputParamsSchema = {
  "Parameters": z.string().optional(),
  "url": z.string().optional(),
  "certificate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `certificate` to the tool, first call the tool `expandSchema` with \"/properties/certificate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.</property-description>").optional()
}