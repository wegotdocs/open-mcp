export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_member_consult`
export const toolDescription = `员企关系咨询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/member/consult`
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
    "business_params",
    "open_id_list",
    "user_id_list"
  ]
}
export const flatMap = {}