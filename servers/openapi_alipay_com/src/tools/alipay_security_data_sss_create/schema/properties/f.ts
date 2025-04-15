import { z } from "zod"

export const inputParams = {
  "a": z.string().describe("12").optional(),
  "b": z.string().describe("有openid,无枚举，有注意事项").optional(),
  "b_open_id": z.string().describe("有openid,无枚举，有注意事项").optional(),
  "f": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `f` to the tool, first call the tool `expandSchema` with \"/properties/f/properties/f\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}