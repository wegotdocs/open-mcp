export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_payee_bind_delete`
export const toolDescription = `解绑收款账号接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/payee/bind/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "login_id",
    "pid"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}