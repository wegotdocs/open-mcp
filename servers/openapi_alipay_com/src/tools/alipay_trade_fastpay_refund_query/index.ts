export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_fastpay_refund_query`
export const toolDescription = `统一收单交易退款查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/fastpay/refund/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "org_pid",
    "out_request_no",
    "out_trade_no",
    "query_options",
    "trade_no"
  ]
}
export const flatMap = {}