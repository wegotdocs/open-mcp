export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_servicemarket_order_item_complete`
export const toolDescription = `服务商完成订单内单个明细实施项`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/servicemarket/order/item/complete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "commodity_order_id",
    "mini_app_id",
    "shop_id"
  ]
}
export const flatMap = {}