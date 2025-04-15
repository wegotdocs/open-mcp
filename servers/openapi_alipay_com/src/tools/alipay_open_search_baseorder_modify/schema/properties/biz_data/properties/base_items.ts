import { z } from "zod"

export const inputParams = {
  "can_search": z.boolean().describe("搜索可见性").optional(),
  "key_words": z.array(z.string()).describe("提报关键词列表").optional()
}