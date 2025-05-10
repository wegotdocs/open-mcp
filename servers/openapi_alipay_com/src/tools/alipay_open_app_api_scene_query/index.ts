export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_api_scene_query`
export const toolDescription = `查询接口字段使用场景`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/api/scene/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "field_name",
    "api_name"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}