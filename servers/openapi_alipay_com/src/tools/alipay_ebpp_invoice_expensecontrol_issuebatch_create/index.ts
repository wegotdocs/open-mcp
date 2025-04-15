export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensecontrol_issuebatch_create`
export const toolDescription = `手动发放额度接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensecontrol/issuebatch/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "batch_no",
    "effective_end_date",
    "effective_start_date",
    "enterprise_id",
    "institution_id",
    "issue_desc",
    "issue_name",
    "issue_target_info_list",
    "quota_type",
    "share_mode"
  ]
}
export const flatMap = {}