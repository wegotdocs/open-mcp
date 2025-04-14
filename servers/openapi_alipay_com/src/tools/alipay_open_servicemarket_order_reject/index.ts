export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_servicemarket_order_reject`
export const toolDescription = `服务商拒绝接单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/servicemarket/order/reject`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "commodity_order_id",
    "reject_reason"
  ]
}
export const flatMap = {}