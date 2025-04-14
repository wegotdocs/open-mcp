export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_member_unbind`
export const toolDescription = `企业删除员工`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/member/unbind`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "biz_scene",
    "identity",
    "identity_type",
    "name",
    "product_code",
    "status"
  ]
}
export const flatMap = {}