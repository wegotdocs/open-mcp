export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_offline`
export const toolDescription = `小程序下架`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/offline`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_version",
    "bundle_id"
  ]
}
export const flatMap = {}