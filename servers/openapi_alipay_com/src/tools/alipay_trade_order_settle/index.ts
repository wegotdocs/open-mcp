export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_order_settle`
export const toolDescription = `统一收单交易结算接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/order/settle`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "extend_params",
    "operator_id",
    "out_request_no",
    "royalty_mode",
    "royalty_parameters",
    "trade_no"
  ]
}
export const flatMap = {}