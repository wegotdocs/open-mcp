export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_inner_experience_cancel`
export const toolDescription = `内部链路取消体验版`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/inner/experience/cancel`
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
    "mini_app_id",
    "oid",
    "operator_id"
  ]
}
export const flatMap = {}