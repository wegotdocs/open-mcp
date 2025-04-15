import { z } from "zod"

export const inputParams = {
  "budget_code": z.string().describe("集分宝预算库编码").optional()
}