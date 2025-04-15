export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_templated_upload`
export const toolDescription = `基于模板构建版本`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/templated/upload`
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
    "ext",
    "mini_app_id",
    "template_id",
    "template_version"
  ]
}
export const flatMap = {}