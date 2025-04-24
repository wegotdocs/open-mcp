import { z } from "zod"

export const inputParamsSchema = {
  "hyperparameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `hyperparameters` to the tool, first call the tool `expandSchema` with \"/properties/method/properties/dpo/properties/hyperparameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The hyperparameters used for the fine-tuning job.</property-description>").optional()
}