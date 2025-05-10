import { z } from "zod"

export const inputParams = {
  "commodity_order_id": z.string().describe("订购服务商品订单ID").optional(),
  "reject_reason": z.string().describe("拒绝接单原因").optional()
}