export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_servicemarket_order_accept`
export const toolDescription = `服务商接单操作`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/servicemarket/order/accept`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "commodity_order_id"
  ]
}
export const flatMap = {}