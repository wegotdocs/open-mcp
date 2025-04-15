export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_settle_confirm`
export const toolDescription = `统一收单确认结算接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/settle/confirm`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "extend_params",
    "out_request_no",
    "settle_info",
    "trade_no"
  ]
}
export const flatMap = {}