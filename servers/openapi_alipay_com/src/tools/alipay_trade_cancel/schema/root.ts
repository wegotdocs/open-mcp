import { z } from "zod"

export const inputParams = {
  "out_trade_no": z.string().describe("原支付请求的商户订单号,和支付宝交易号不能同时为空").optional(),
  "trade_no": z.string().describe("支付宝交易号，和商户订单号不能同时为空").optional()
}