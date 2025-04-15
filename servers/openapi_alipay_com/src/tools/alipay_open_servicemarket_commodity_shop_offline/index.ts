export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_servicemarket_commodity_shop_offline`
export const toolDescription = `门店插件下架操作`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/servicemarket/commodity/shop/offline`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "commodity_id",
    "shop_id"
  ]
}
export const flatMap = {}