import { z } from "zod"

export const inputParams = {
  "cancel_reason": z.string().describe("取消原因，取消原因id为i_6时必填").optional(),
  "cancel_reason_id": z.string().describe("取消原因id").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "order_no": z.string().describe("支付宝订单流水号").optional(),
  "out_order_no": z.string().describe("商家订单号，与order_no不能同时为空").optional(),
  "waybill_no": z.string().describe("即时配送运单编号").optional()
}