export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_employeerules_query`
export const toolDescription = `查询员工绑定的所有费控规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/employeerules/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "employee_id",
    "employee_open_id",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}