export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_paymentinfo_sync`
export const toolDescription = `车辆停车缴费接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/paymentinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "car_number",
    "isv_url",
    "out_serial_no",
    "parking_id",
    "payment_free_minutes",
    "payment_time",
    "serial_no"
  ]
}
export const flatMap = {}