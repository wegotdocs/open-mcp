export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_overtimecharginginfo_sync`
export const toolDescription = `车辆停车超时重计费接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/overtimecharginginfo/sync`
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
    "parking_id",
    "serial_no"
  ]
}
export const flatMap = {}