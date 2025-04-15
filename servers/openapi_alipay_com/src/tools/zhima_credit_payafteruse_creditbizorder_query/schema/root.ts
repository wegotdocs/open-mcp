import { z } from "zod"

export const inputParams = {
  "credit_biz_order_id": z.string().describe("信用服务订单号，out_order_no与credit_biz_order_id至少传一个").optional(),
  "out_order_no": z.string().describe("商户外部单号，out_order_no与credit_biz_order_id至少传一个").optional()
}