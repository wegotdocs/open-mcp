export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_scenerule_modify`
export const toolDescription = `修改费控规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/scenerule/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "action",
    "agreement_no",
    "effective_end_date",
    "effective_start_date",
    "enterprise_id",
    "expense_ctrl_rule_info_list",
    "payment_policy",
    "standard_desc",
    "standard_id",
    "standard_name"
  ]
}
export const flatMap = {}