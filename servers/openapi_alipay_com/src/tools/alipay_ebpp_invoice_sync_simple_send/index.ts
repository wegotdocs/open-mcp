export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_sync_simple_send`
export const toolDescription = `简单模式发票回传接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/sync/simple/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "invoice_info",
    "m_short_name",
    "sub_m_short_name"
  ]
}
export const flatMap = {}