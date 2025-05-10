import { z } from "zod"

export const inputParams = {
  "biz_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `biz_data` to the tool, first call the tool `expandSchema` with \"/properties/biz_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "biz_type": z.string().describe("表示修改内容的业务类型").optional(),
  "opt_type": z.string().describe("操作的具体类型").optional()
}