import { z } from "zod"

export const inputParams = {
  "org_pid": z.string().describe("银行间联模式下有用，其它场景请不要使用；\r\t双联通过该参数指定需要查询的交易所属收单机构的pid;").optional(),
  "out_request_no": z.string().describe("退款请求号。\t请求退款接口时，传入的退款请求号，如果在退款请求时未传入，则该值为创建交易时的商户订单号。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 trade_no,out_trade_no如果同时存在优先取trade_no").optional(),
  "query_options": z.array(z.string()).describe("查询选项，商户通过上送该参数来定制同步需要额外返回的信息字段，数组格式。枚举支持：\trefund_detail_item_list：本次退款使用的资金渠道；\tgmt_refund_pay：退款执行成功的时间；\tdeposit_back_info：银行卡冲退信息；").optional(),
  "trade_no": z.string().describe("支付宝交易号。\t和商户订单号不能同时为空").optional()
}