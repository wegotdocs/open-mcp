import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string().describe("用户当前位置").optional(),
  "time": z.string().datetime({ offset: true }).describe("请求时间").optional(),
  "preferences": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `preferences` to the tool, first call the tool `expandSchema` with \"/properties/context/properties/preferences\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>用户偏好设置</property-description>").optional()
}