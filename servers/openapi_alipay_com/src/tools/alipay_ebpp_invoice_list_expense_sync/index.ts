export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_list_expense_sync`
export const toolDescription = `报销状态批量同步开放接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/list/expense/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "business_time",
    "expense_order_no",
    "expense_tax_no",
    "invoice_element_list",
    "memo",
    "open_id",
    "status",
    "user_id"
  ]
}
export const flatMap = {}