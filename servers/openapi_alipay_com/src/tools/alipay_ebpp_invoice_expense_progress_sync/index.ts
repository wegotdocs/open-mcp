export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expense_progress_sync`
export const toolDescription = `发票报销处理进度同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expense/progress/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "apply_id",
    "business_time",
    "expense_detail_url",
    "expense_order_no",
    "expense_tax_no",
    "invoice_code",
    "invoice_no",
    "memo",
    "open_id",
    "status",
    "user_id"
  ]
}
export const flatMap = {}