import { z } from "zod"

export const inputParams = {
  "biz_content": z.string().describe("验签时该参数不做任何处理").optional()
}