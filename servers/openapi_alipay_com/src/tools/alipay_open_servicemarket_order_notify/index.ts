export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_servicemarket_order_notify`
export const toolDescription = `服务市场商户确认订购通知`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/servicemarket/order/notify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "notify_url"
  ]
}
export const flatMap = {}