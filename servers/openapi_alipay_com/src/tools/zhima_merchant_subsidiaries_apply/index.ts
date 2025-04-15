export { inputParams } from "./schema/root.js"

export const toolName = `zhima_merchant_subsidiaries_apply`
export const toolDescription = `子商户信息添加`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/merchant/subsidiaries/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "pid",
    "service_id",
    "smid",
    "sub_merchant_contact_number",
    "sub_merchant_jump_link",
    "sub_merchant_logo_url",
    "sub_merchant_name",
    "sub_pid"
  ]
}
export const flatMap = {}