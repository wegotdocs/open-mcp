export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_betainfo_query`
export const toolDescription = `查看可邀测状态接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/betainfo/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "plugin_id",
    "bundle_id",
    "plugin_version",
    "app_origin"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}