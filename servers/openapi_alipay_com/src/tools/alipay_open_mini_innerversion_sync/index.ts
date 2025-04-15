export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_sync`
export const toolDescription = `小程序包信息推送`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/sync`
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
    "dev_id",
    "mini_app_id",
    "sync_type"
  ]
}
export const flatMap = {}