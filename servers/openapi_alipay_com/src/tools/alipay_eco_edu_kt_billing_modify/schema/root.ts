import { z } from "zod"

export const inputParams = {
  "bank_success": z.string().describe("成功Y，失败N").optional(),
  "buyer_logon_id": z.string().describe("退款时，支付宝返回的用户的登录id").optional(),
  "buyer_user_id": z.string().describe("支付宝返回的买家支付宝用户id").optional(),
  "buyer_user_open_id": z.string().describe("支付宝返回的买家支付宝用户id加密后信息").optional(),
  "fund_change": z.string().describe("本次退款是否发生了资金变化").optional(),
  "gmt_refund": z.string().describe("支付宝返回的退款时间，而不是商户退款申请的时间").optional(),
  "out_request_no": z.string().describe("标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传。（若退款时填写，则同步退款状态时也必须填写）").optional(),
  "out_trade_no": z.string().describe("isv系统的订单号").optional(),
  "refund_amount": z.string().describe("需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数").optional(),
  "refund_detail_item_list": z.string().describe("支付宝返回的退款资金渠道，json格式字符串").optional(),
  "refund_reason": z.string().describe("退款原因，商家根据客户实际退款原因填写（若退款时填写，则同步退款状态时也必须填写）").optional(),
  "status": z.string().describe("状态：1:缴费成功，2:关闭账单，3、退费\r\t如果为退款状态，需要填写fund_change, \r\trefund_amount, refund_reason,\r\tout_request_no, buyer_logon_id,\r\tgmt_refund,\r\tbuyer_user_id, refund_detail_item_list;\r\t4、同步网商返回的状态,如果是网商银行的账单，bank_success这个字段必填").optional(),
  "trade_no": z.string().describe("支付宝返回的交易号").optional()
}