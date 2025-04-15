import { z } from "zod"

export const inputParams = {
  "bill_user_id": z.string().describe("目标查询账户（仅支持部分场景，查询自身时候不需要传递当前字段）。").optional()
}