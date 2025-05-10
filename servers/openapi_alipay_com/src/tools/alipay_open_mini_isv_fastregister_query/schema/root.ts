import { z } from "zod"

export const inputParams = {
  "order_no": z.string().describe("代创建试用小程序单号").optional()
}