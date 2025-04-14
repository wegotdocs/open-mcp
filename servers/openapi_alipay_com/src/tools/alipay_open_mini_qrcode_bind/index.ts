export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_qrcode_bind`
export const toolDescription = `关联普通二维码`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/qrcode/bind`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "mode",
    "page_redirection",
    "route_pattern",
    "route_url"
  ]
}
export const flatMap = {}