export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_payee_bind_create`
export const toolDescription = `添加收款账号接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/payee/bind/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "login_id",
    "pid"
  ]
}
export const flatMap = {}