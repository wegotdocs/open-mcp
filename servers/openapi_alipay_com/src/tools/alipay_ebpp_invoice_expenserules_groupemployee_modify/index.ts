export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_groupemployee_modify`
export const toolDescription = `修改费控规则员工`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/groupemployee/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "add_employee_list",
    "add_employee_open_id_list",
    "agreement_no",
    "enterprise_id",
    "group_id_list",
    "remove_employee_list",
    "remove_employee_open_id_list"
  ]
}
export const flatMap = {}