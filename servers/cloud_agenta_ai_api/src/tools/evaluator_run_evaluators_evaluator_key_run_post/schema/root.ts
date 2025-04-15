import { z } from "zod"

export const inputParams = {
  "evaluator_key": z.string(),
  "inputs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `inputs` to the tool, first call the tool `expandSchema` with \"/properties/inputs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "settings": z.union([z.record(z.any()), z.null()]).optional(),
  "credentials": z.union([z.record(z.any()), z.null()]).optional()
}