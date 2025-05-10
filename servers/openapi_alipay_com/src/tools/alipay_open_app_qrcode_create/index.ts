export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_qrcode_create`
export const toolDescription = `小程序生成推广二维码接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/qrcode/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "color",
    "describe",
    "query_param",
    "size",
    "url_param"
  ]
}
export const flatMap = {}