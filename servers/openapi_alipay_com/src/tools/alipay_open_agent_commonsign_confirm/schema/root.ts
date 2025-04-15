import { z } from "zod"

export const inputParams = {
  "batch_no": z.string().describe("ISV 代商户操作事务编号，通过事务开启接口alipay.open.agent.create调用返回。").optional()
}