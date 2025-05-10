import { z } from "zod"

export const inputParams = {
  "discount_amount": z.string().describe("商户回传的优惠金额，如用户享受的红包金额，单位元").optional(),
  "discount_desc": z.string().describe("商户数据回传的优惠信息的名称。").optional(),
  "has_alipay_trade": z.boolean().describe("是否为支付宝交易，默认false，表示是否要做支付宝交易关联。此时tradeNo必须传支付宝交易号。").optional(),
  "task_amount": z.string().describe("用户和商户发生交易的交易单金额，单位元。").optional(),
  "task_desc": z.string().describe("任务描述").optional(),
  "trade_no": z.string().describe("用户和商户发生金额类交易的交易单号。").optional()
}