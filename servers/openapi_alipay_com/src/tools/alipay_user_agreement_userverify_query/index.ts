export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_userverify_query`
export const toolDescription = `用户协议鉴权查询结果`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/userverify/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "agreement_no",
    "apply_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}