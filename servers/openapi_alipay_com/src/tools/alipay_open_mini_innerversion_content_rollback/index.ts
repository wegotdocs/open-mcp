export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_content_rollback`
export const toolDescription = `内部链路回滚版本`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/content/rollback`
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
    "pid"
  ]
}
export const flatMap = {}