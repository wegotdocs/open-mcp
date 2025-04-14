export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_auth_sign`
export const toolDescription = `发票授权关系签约`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/auth/sign`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "authorization_type",
    "extend_fields",
    "m_short_name",
    "open_id",
    "user_id"
  ]
}
export const flatMap = {}