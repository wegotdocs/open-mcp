import { z } from "zod"

export const inputParams = {
  "color": z.string().describe("当前文字颜色").optional(),
  "value": z.string().describe("模板中占位符的值").optional()
}