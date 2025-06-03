import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "companyId": z.string(),
  "additionalInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `additionalInfo` to the tool, first call the tool `expandSchema` with \"/properties/additionalInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "sync": z.boolean().optional()
}