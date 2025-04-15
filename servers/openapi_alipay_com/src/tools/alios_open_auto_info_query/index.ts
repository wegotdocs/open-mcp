export { inputParams } from "./schema/root.js"

export const toolName = `alios_open_auto_info_query`
export const toolDescription = `查询阿里车的车辆信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alios/open/auto/info/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "auth_token",
    "user_id",
    "open_id",
    "device_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}