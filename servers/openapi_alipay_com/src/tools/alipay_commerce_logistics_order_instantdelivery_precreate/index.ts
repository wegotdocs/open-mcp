export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_logistics_order_instantdelivery_precreate`
export const toolDescription = `预下即时配送订单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/logistics/order/instantdelivery/precreate`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "consumer_id",
    "consumer_notify",
    "consumer_source",
    "goods_details",
    "goods_info",
    "logistics_companies",
    "open_id",
    "order_ext_istd",
    "out_order_no",
    "receiver",
    "sender",
    "shop_no"
  ]
}
export const flatMap = {}