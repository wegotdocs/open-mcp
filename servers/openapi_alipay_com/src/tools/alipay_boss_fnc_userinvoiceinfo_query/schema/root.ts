import { z } from "zod"

export const inputParams = {
  "pid": z.string().describe("开票pid/mid/ou，唯一标识商户信息/集团用户信息的ID").optional()
}