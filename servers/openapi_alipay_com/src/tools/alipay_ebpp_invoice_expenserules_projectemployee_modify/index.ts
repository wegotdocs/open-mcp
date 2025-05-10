export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_projectemployee_modify`
export const toolDescription = `修改项目的员工列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/projectemployee/modify`
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
    "project_id",
    "remove_employee_list",
    "remove_employee_open_id_list"
  ]
}
export const flatMap = {}