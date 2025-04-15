export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_upload`
export const toolDescription = `小程序基于模板上传版本`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/upload`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_version",
    "bundle_id",
    "ext",
    "template_id",
    "template_version"
  ]
}
export const flatMap = {}