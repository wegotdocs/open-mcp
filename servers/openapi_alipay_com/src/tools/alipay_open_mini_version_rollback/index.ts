export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_rollback`
export const toolDescription = `小程序回滚`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/rollback`
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