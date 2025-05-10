export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_apply_status_notify`
export const toolDescription = `发票申请状态变更`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/apply/status/notify`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "apply_id",
    "apply_status",
    "invoice_uks",
    "message"
  ]
}
export const flatMap = {}