export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_member_bind`
export const toolDescription = `因公付邀请员工`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/member/bind`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "account_quota",
    "agreement_no",
    "agreement_sign_info",
    "biz_scene",
    "business_params",
    "identity",
    "identity_type",
    "identity_verified_info",
    "name",
    "product_code"
  ]
}
export const flatMap = {}