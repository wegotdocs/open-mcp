export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_customs_query`
export const toolDescription = `查询报关详细信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/customs/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_request_nos"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}