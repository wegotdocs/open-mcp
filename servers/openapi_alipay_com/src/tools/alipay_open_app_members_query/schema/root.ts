import { z } from "zod"

export const inputParams = {
  "role": z.string().describe("查询的成员角色类型").optional()
}