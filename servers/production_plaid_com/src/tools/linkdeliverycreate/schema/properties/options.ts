import { z } from "zod"

export const inputParamsSchema = {
  "recipient": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `recipient` to the tool, first call the tool `expandSchema` with \"/properties/options/properties/recipient\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Metadata related to the recipient. If the information required to populate this field is not available, leave it blank.</property-description>").optional()
}