import { z } from "zod"

export const inputParams = {
  "newid": z.number().int().describe("测试").optional()
}