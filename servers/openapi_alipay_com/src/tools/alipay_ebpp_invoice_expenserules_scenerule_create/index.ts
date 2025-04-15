export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_scenerule_create`
export const toolDescription = `创建费控规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/scenerule/create`
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
    "effective_end_date",
    "effective_start_date",
    "employee_list",
    "employee_open_id_list",
    "enterprise_id",
    "expense_ctrl_rule_info_list",
    "expense_type",
    "payment_policy",
    "scene_type",
    "standard_desc",
    "standard_name"
  ]
}
export const flatMap = {}