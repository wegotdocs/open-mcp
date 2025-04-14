export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_projectrule_create`
export const toolDescription = `创建项目费控规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/projectrule/create`
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
    "expense_ctrl_rule_info_group_list",
    "project_name"
  ]
}
export const flatMap = {}