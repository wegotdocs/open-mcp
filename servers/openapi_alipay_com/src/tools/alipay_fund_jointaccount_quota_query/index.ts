export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_quota_query`
export const toolDescription = `查询账户额度详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/quota/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "account_id",
    "member_id",
    "member_open_id",
    "operate_role",
    "agreement_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}