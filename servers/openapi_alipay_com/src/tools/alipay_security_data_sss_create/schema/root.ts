import { z } from "zod"

export const inputParams = {
  "a": z.number().int().describe("path.数字，无枚举，有注意事项"),
  "b": z.string().describe("有枚举，必须，有openid，有注意事项").optional(),
  "b_open_id": z.string().describe("有枚举，必须，有openid，有注意事项").optional(),
  "area_code": z.string().describe("body,可选，无openid，有枚举值，注意事项").optional(),
  "f": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `f` to the tool, first call the tool `expandSchema` with \"/properties/f\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}