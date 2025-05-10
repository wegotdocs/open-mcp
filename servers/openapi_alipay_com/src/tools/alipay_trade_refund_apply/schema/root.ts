import { z } from "zod"

export const inputParams = {
  "extend_params": z.string().describe("商户传入业务信息，具体值要和支付宝约定，格式为json格式。\r\t医保退款场景下，DESIGNATED_REFUND_ASSET为INNER_ASSET表示只退自费部分，DESIGNATED_REFUND_ASSET为OUTSIDE_ASSET表示只退医保部分，医保部分不支持部分退。退医保资金必需传cancel_bill_no和cancel_serial_no。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operator_id": z.string().describe("商户的操作员编号").optional(),
  "out_request_no": z.string().describe("标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传。").optional(),
  "out_trade_no": z.string().describe("订单支付时传入的商户订单号,不能和 trade_no同时为空").optional(),
  "refund_amount": z.string().describe("需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数").optional(),
  "refund_fund_details": z.array(z.object({ "funds": z.array(z.string()).describe("退款资金明细\r\t详：\r\t若type为paySerialNo则funds为\r\t[{\"paySerialNo\":\"支付流水1\",\"refundFee\":\"退款金额1\"},{\"paySerialNo\":\"支付流水2\",\"refundFee\":\"退款金额2\"}]").optional(), "trans_in": z.string().describe("收入方账户\r\t为空则原路退回").optional(), "trans_in_type": z.string().describe("收入方账户类型").optional(), "type": z.string().describe("描述资金明细类型\r\t详：若type为paySerialNo\r\t则funds参数中体现的都为对应支付流水的退款明细").optional() })).describe("退款资金明细\r\t注：目前只有SETTLE_OFFLINE_GROUP产品的退款支持该字段").optional(),
  "refund_reason": z.string().describe("退款的原因说明").optional(),
  "store_id": z.string().describe("商户的门店编号").optional(),
  "terminal_id": z.string().describe("商户的终端编号").optional(),
  "trade_no": z.string().describe("支付宝交易号，和商户订单号不能同时为空").optional()
}