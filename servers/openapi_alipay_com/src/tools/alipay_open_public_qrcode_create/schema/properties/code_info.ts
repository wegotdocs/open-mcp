import { z } from "zod"

export const inputParams = {
  "goto_url": z.string().describe("跳转URL，扫码关注服务窗后会直接跳转到此URL").optional(),
  "scene": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scene` to the tool, first call the tool `expandSchema` with \"/properties/code_info/properties/scene\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}