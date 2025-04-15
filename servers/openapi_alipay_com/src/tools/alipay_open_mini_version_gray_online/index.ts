export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_gray_online`
export const toolDescription = `小程序灰度上架`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/gray/online`
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
    "gray_strategy"
  ]
}
export const flatMap = {}