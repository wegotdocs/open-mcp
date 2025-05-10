export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_create`
export const toolDescription = `制度新增`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "consult_mode",
    "currency",
    "effective_end_date",
    "effective_start_date",
    "enterprise_id",
    "expense_type",
    "institution_desc",
    "institution_name",
    "institution_scope_info",
    "issue_rule_info_list",
    "outer_source_id",
    "standard_info_list"
  ]
}
export const flatMap = {}