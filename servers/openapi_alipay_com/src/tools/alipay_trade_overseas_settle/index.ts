export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_overseas_settle`
export const toolDescription = `统一境内收单跨境结算接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/overseas/settle`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "extend_params",
    "foreign_settle_currency",
    "out_request_no",
    "trade_no"
  ]
}
export const flatMap = {}