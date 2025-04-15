export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_auth_token_app`
export const toolDescription = `换取应用授权令牌`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/auth/token/app`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "code",
    "grant_type",
    "refresh_token"
  ]
}
export const flatMap = {}