export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_auth_userauth_relationship_query`
export const toolDescription = `用户授权关系查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/auth/userauth/relationship/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id",
    "scopes"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}