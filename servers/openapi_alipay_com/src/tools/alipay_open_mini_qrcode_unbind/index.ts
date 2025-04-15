export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_qrcode_unbind`
export const toolDescription = `删除已关联普通二维码`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/qrcode/unbind`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "route_group"
  ]
}
export const flatMap = {}