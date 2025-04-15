export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_instantdelivery_merchantagreement_sign`
export const toolDescription = `即时配送中商家代扣协议签署`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/instantdelivery/merchantagreement/sign`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "open_id",
    "user_id"
  ]
}
export const flatMap = {}