import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "id": z.string(),
  "user_id": z.string().optional(),
  "set": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `set` to the tool, first call the tool `expandSchema` with \"/properties/set\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "unset": z.array(z.string()).optional()
}