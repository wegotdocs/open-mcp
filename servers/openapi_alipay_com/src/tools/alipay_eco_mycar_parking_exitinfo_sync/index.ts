export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_exitinfo_sync`
export const toolDescription = `车辆驶出接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/exitinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "actual_amount",
    "car_color",
    "car_number",
    "discount_amount",
    "exit_id",
    "is_encrypt_car_number",
    "isv_url",
    "order_amount",
    "out_serial_no",
    "out_time",
    "parking_id",
    "serial_no",
    "space_number",
    "store_id"
  ]
}
export const flatMap = {}