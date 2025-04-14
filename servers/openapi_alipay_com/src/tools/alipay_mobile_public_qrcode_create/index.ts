export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_qrcode_create`
export const toolDescription = `生成带参数的二维码`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/qrcode/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_content"
  ]
}
export const flatMap = {}