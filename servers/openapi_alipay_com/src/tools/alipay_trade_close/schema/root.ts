import { z } from "zod"

export const inputParams = {
  "notify_url": z.string().describe("通知地址").optional(),
  "operator_id": z.string().describe("商家操作员编号 id，由商家自定义。").optional(),
  "out_trade_no": z.string().describe("订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 trade_no,out_trade_no如果同时存在优先取trade_no").optional(),
  "trade_no": z.string().describe("该交易在支付宝系统中的交易流水号。最短 16 位，最长 64 位。和out_trade_no不能同时为空，如果同时传了 out_trade_no和 trade_no，则以 trade_no为准。").optional()
}