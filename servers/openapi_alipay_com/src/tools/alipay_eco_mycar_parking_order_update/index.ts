export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_order_update`
export const toolDescription = `订单更新接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/order/update`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "open_id",
    "order_no",
    "order_status",
    "user_id"
  ]
}
export const flatMap = {}