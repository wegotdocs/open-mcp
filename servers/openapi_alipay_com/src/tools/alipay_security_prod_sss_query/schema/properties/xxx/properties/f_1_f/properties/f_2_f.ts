import { z } from "zod"

export const inputParams = {
  "th_1_f": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `th_1_f` to the tool, first call the tool `expandSchema` with \"/properties/xxx/properties/f_1_f/properties/f_2_f/properties/th_1_f\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "th_2_n": z.string().describe("无枚举值").optional(),
  "th_3_n": z.boolean().describe("1").optional()
}