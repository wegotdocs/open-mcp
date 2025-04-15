export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_modify`
export const toolDescription = `制度编辑`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "consult_mode",
    "effective",
    "effective_end_date",
    "effective_start_date",
    "enterprise_id",
    "institution_desc",
    "institution_id",
    "institution_name",
    "modify_issue_rule_detail_info",
    "modify_scope_info",
    "modify_standard_detail_info"
  ]
}
export const flatMap = {}