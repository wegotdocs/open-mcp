export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_rule_modify`
export const toolDescription = `企业账户规则设置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/rule/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "account_name",
    "account_quota",
    "agreement_no",
    "authorized_rule",
    "biz_scene",
    "product_code"
  ]
}
export const flatMap = {}