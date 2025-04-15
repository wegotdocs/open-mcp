export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_parkinglotbiz_transfer`
export const toolDescription = `车场业务归属配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/parkinglotbiz/transfer`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "business_isv",
    "parking_id"
  ]
}
export const flatMap = {}