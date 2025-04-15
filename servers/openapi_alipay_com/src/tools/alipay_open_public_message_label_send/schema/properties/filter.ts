import { z } from "zod"

export const inputParams = {
  "context": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `context` to the tool, first call the tool `expandSchema` with \"/properties/filter/properties/context\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "template": z.string().describe("过滤器模板，${a}是一个变量，会被context参数中的a参数替换，从而展开为最终的表达式，template最多支持两个参数，支持and及or连接符。\r\tand：同时满足条件；\r\tor：只需满足其中一个条件").optional()
}