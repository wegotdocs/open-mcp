import { z } from "zod"

export const inputParams = {
  "org_pid": z.string().describe("银行间联模式下有用，其它场景请不要使用；\r\t双联通过该参数指定需要查询的交易所属收单机构的pid;").optional(),
  "out_trade_no": z.string().describe("订单支付时传入的商户订单号,和支付宝交易号不能同时为空。\r\ttrade_no,out_trade_no如果同时存在优先取trade_no").optional(),
  "query_options": z.array(z.string()).describe("查询选项，商户传入该参数可定制本接口同步响应额外返回的信息字段，数组格式。").optional(),
  "trade_no": z.string().describe("支付宝交易号，和商户订单号不能同时为空").optional()
}