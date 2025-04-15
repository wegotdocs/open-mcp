export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_royalty_rate_query`
export const toolDescription = `分账比例查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/royalty/rate/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_request_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}