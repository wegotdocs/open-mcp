export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_gray_finish`
export const toolDescription = `内部链路结束灰度`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/gray/finish`
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
    "pid"
  ]
}
export const flatMap = {}