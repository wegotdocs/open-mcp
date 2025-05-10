export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_projectrule_query`
export const toolDescription = `查询项目费控规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/projectrule/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "project_id",
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