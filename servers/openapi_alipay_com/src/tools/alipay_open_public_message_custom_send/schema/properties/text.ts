import { z } from "zod"

export const inputParams = {
  "content": z.string().describe("文本消息的内容").optional(),
  "title": z.string().describe("文本消息的标题").optional()
}