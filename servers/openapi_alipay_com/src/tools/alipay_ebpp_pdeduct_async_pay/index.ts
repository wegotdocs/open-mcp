export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_pdeduct_async_pay`
export const toolDescription = `公共事业缴费直连代扣异步扣款支付接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/pdeduct/async/pay`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agent_channel",
    "agent_code",
    "agreement_id",
    "bill_date",
    "bill_key",
    "extend_field",
    "fine_amount",
    "memo",
    "open_id",
    "out_order_no",
    "pay_amount",
    "pid",
    "user_id"
  ]
}
export const flatMap = {}