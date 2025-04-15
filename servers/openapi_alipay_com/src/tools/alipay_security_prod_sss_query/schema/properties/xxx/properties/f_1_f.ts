import { z } from "zod"

export const inputParams = {
  "f_1_openid": z.string().describe("1").optional(),
  "f_1_y": z.string().describe("1").optional(),
  "f_2_f": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `f_2_f` to the tool, first call the tool `expandSchema` with \"/properties/xxx/properties/f_1_f/properties/f_2_f\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "f_3_openid": z.string().describe("1").optional(),
  "f_3_y": z.number().int().describe("1").optional()
}