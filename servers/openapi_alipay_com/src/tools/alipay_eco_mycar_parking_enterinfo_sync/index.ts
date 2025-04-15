export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_enterinfo_sync`
export const toolDescription = `车辆驶入接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/enterinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_query",
    "car_color",
    "car_number",
    "entrance_id",
    "free_minutes",
    "in_time",
    "is_encrypt_car_number",
    "isv_url",
    "out_serial_no",
    "parking_id",
    "space_number",
    "store_id"
  ]
}
export const flatMap = {}