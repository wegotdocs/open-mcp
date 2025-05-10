export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_cancel`
export const toolDescription = `统一收单交易撤销接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "out_trade_no",
    "trade_no"
  ]
}
export const flatMap = {}