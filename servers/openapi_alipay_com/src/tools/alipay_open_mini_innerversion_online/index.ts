export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_online`
export const toolDescription = `内部小程序-上架`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/online`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_offline_version",
    "app_online_version",
    "app_origin",
    "bundle_id",
    "inst_code",
    "mini_app_id"
  ]
}
export const flatMap = {}