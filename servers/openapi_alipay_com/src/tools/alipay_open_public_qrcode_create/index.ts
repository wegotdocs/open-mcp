export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_qrcode_create`
export const toolDescription = `带参推广二维码接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/qrcode/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "code_info",
    "code_type",
    "expire_second",
    "show_logo"
  ]
}
export const flatMap = {}