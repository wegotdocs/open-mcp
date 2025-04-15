export { inputParams } from "./schema/root.js"

export const toolName = `alipay_system_oauth_token`
export const toolDescription = `换取授权访问令牌`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/system/oauth/token`
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