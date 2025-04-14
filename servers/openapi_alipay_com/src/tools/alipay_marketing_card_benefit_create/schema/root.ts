import { z } from "zod"

export const inputParams = {
  "mcard_template_benefit": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mcard_template_benefit` to the tool, first call the tool `expandSchema` with \"/properties/mcard_template_benefit\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}