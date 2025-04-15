export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_indirect_authorder_create`
export const toolDescription = `商家认证申请单提交`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/indirect/authorder/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "auth_identity_info",
    "benefit_person_info",
    "contact_person_info",
    "extra_credentials",
    "legal_person_info",
    "out_biz_no",
    "source"
  ]
}
export const flatMap = {}