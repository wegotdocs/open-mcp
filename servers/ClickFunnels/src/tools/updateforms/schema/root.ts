import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "form": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `form` to the tool, first call the tool `expandSchema` with \"/properties/form\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Forms</property-description>").optional()
}