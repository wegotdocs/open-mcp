import { z } from "zod"

export const inputParams = {
  "realm": z.array(z.string()).optional(),
  "client": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `client` to the tool, first call the tool `expandSchema` with \"/properties/composites/properties/client\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}