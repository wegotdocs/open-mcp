export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_vehicle_query`
export const toolDescription = `车牌查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/vehicle/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "auth_token",
    "car_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}