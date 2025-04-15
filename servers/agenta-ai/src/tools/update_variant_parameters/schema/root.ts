import { z } from "zod"

export const inputParamsSchema = {
  "variant_id": z.string(),
  "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "commit_message": z.union([z.string(), z.null()]).optional()
}