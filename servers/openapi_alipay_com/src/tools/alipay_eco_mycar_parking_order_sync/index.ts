export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_order_sync`
export const toolDescription = `订单同步接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/order/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agent_pid",
    "car_number",
    "card_number",
    "in_duration",
    "in_time",
    "open_id",
    "order_no",
    "order_status",
    "order_time",
    "out_order_no",
    "out_parking_id",
    "out_time",
    "parking_id",
    "parking_name",
    "parking_record_id",
    "pay_money",
    "pay_scene",
    "pay_time",
    "pay_type",
    "smid",
    "user_id"
  ]
}
export const flatMap = {}