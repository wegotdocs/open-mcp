export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_employee_query`
export const toolDescription = `查询费控规则员工`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/employee/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "standard_id",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}