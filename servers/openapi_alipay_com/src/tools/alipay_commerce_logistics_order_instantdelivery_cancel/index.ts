export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_logistics_order_instantdelivery_cancel`
export const toolDescription = `取消即时配送订单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/logistics/order/instantdelivery/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "cancel_reason",
    "cancel_reason_id",
    "logistics_code",
    "order_no",
    "out_order_no",
    "waybill_no"
  ]
}
export const flatMap = {}