export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_package_create`
export const toolDescription = `单独构建包信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/package/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "app_version",
    "bundle_id",
    "mini_app_id",
    "package_type",
    "pid"
  ]
}
export const flatMap = {}