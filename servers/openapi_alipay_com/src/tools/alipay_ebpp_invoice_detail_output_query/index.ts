export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_detail_output_query`
export const toolDescription = `获取发票详细信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/detail/output/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "invoice_code",
    "invoice_no",
    "open_id",
    "scene",
    "skip_expense_progress_sync",
    "user_id"
  ]
}
export const flatMap = {}