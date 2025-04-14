import { z } from "zod"

export const inputParams = {
  "text_content_fill_rule_id": z.string().describe("文本内容填充规则ID").optional(),
  "text_content_fill_variable": z.string().describe("文本内容填充变量，变量key由运营同学提供").optional()
}