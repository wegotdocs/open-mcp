import { z } from "zod"

export const inputParams = {
  "commodity_order_id": z.string().describe("服务商品订单ID").optional()
}