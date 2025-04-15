export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_auth_token_app_query`
export const toolDescription = `查询某个应用授权AppAuthToken的授权信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/auth/token/app/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "app_auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}