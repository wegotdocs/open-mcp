export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_memberrule_modify`
export const toolDescription = `企业设置员工规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/memberrule/modify`
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
    "member_list",
    "product_code"
  ]
}
export const flatMap = {}