export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_projectrules_modify`
export const toolDescription = `修改项目费控规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/projectrules/modify`
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
    "expense_ctrl_rule_info_group_list",
    "project_id"
  ]
}
export const flatMap = {}