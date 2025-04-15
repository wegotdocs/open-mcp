export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_upgrade`
export const toolDescription = `升级模板实例化小程序`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/upgrade`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "bundle_id",
    "mini_app_id",
    "template_id",
    "template_version"
  ]
}
export const flatMap = {}