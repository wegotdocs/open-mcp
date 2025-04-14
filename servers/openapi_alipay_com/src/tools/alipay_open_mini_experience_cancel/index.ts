export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_experience_cancel`
export const toolDescription = `小程序取消体验版`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/experience/cancel`
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