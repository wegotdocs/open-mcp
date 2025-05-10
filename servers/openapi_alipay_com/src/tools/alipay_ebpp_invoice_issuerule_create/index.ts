export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_issuerule_create`
export const toolDescription = `新增发放规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/issuerule/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "effective",
    "effective_period",
    "enterprise_id",
    "invalid_mode",
    "invalid_mode_value",
    "issue_amount_value",
    "issue_end_date",
    "issue_rule_name",
    "issue_start_date",
    "issue_type",
    "outer_source_id",
    "quota_type",
    "share_mode",
    "target_id",
    "target_type"
  ]
}
export const flatMap = {}