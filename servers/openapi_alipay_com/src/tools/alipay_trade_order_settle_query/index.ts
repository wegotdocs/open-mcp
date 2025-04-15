export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_order_settle_query`
export const toolDescription = `交易分账查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/order/settle/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "settle_no",
    "out_request_no",
    "trade_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}