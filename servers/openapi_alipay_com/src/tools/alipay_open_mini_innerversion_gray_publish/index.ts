export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_gray_publish`
export const toolDescription = `内部链路小程序灰度上架`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/gray/publish`
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
    "beta_app_id_list",
    "bundle_id",
    "gray_strategy",
    "mini_app_id",
    "pid"
  ]
}
export const flatMap = {}