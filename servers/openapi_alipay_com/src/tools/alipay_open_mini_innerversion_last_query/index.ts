export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_last_query`
export const toolDescription = `内部链路查询最新版本号`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/last/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "bundle_id",
    "app_origin",
    "pid"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}