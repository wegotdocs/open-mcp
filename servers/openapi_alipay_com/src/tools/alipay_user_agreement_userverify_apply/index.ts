export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_userverify_apply`
export const toolDescription = `协议用户一致性验证`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/userverify/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no"
  ]
}
export const flatMap = {}