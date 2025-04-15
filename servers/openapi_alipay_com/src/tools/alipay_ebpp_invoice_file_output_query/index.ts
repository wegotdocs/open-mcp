export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_file_output_query`
export const toolDescription = `获取电子发票原文件`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/file/output/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id",
    "invoice_code",
    "invoice_no",
    "scene",
    "skip_expense_progress_sync"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}