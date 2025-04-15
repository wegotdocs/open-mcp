export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_parkinglotinfo_query`
export const toolDescription = `停车场信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/parkinglotinfo/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "parking_id",
    "out_parking_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}