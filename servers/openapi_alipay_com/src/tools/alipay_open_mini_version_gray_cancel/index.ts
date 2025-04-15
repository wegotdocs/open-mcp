export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_gray_cancel`
export const toolDescription = `小程序结束灰度`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/gray/cancel`
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