export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensecontrol_quota_create`
export const toolDescription = `创建余额/点券`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensecontrol/quota/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "effective_end_date",
    "effective_start_date",
    "enterprise_id",
    "issue_desc",
    "issue_name",
    "issue_quota_target_list",
    "outer_source_id",
    "quota_type",
    "share_mode",
    "target_id",
    "target_type"
  ]
}
export const flatMap = {}