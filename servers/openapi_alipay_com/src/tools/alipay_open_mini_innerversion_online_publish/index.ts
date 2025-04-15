export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_online_publish`
export const toolDescription = `内部链路小程序上架`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/online/publish`
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
    "downgrade",
    "mini_app_id",
    "pid",
    "release_type"
  ]
}
export const flatMap = {}