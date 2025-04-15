export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_close`
export const toolDescription = `统一收单交易关闭接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/close`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "notify_url",
    "operator_id",
    "out_trade_no",
    "trade_no"
  ]
}
export const flatMap = {}