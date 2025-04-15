import { z } from "zod"

export const inputParams = {
  "order_no": z.string().describe("服务商代商家创建小程序，由支付宝开放平台返回的订单号用于后续查询处理进展。").optional()
}