import { z } from "zod"

export const inputParams = {
  "action_date": z.string().describe("用户购买、升级、降级、续费的操作时间。格式为：yyyy-MM-dd hh:mm:ss").optional(),
  "alipay_trade_no": z.string().describe("支付宝交易号，由api: alipay.trade.create 返回").optional(),
  "out_trade_no": z.string().describe("商户订单号。与创建订单api：alipay.trade.create保持一致").optional(),
  "price": z.string().describe("用户购买金额。当购买/升级/续费场景必填，单位元，精确到小数点后2位").optional(),
  "source": z.string().describe("用户操作来源").optional()
}