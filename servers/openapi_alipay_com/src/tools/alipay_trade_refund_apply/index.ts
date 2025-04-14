export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_refund_apply`
export const toolDescription = `异步退款受理接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/refund/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "extend_params",
    "notify_url",
    "operator_id",
    "out_request_no",
    "out_trade_no",
    "refund_amount",
    "refund_fund_details",
    "refund_reason",
    "store_id",
    "terminal_id",
    "trade_no"
  ]
}
export const flatMap = {}