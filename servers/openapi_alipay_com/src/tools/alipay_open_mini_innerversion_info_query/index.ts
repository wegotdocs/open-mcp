export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_info_query`
export const toolDescription = `内部链路小程序版本信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/info/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "bundle_id",
    "mini_app_id",
    "app_version",
    "app_origin"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}