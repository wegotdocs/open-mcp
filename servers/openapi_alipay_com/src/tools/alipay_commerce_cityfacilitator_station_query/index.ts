export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_cityfacilitator_station_query`
export const toolDescription = `地铁购票站点数据查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/cityfacilitator/station/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "city_code"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}