export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_auth_app_aes_set`
export const toolDescription = `授权应用aes密钥设置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/auth/app/aes/set`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "merchant_app_id"
  ]
}
export const flatMap = {}