export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_auth_app_aes_get`
export const toolDescription = `授权应用aes密钥查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/auth/app/aes/get`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_app_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}