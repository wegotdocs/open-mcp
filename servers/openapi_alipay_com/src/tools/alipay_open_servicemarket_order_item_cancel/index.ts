export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_servicemarket_order_item_cancel`
export const toolDescription = `服务订单明细实施项单项取消`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/servicemarket/order/item/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "cancel_reason",
    "commodity_order_id",
    "mini_app_id",
    "shop_id"
  ]
}
export const flatMap = {}