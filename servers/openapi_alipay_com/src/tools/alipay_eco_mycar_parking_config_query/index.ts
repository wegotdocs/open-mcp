export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_config_query`
export const toolDescription = `ISV系统配置查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/config/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "interface_name",
    "interface_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}