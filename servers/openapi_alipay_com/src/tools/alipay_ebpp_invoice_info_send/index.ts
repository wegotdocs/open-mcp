export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_info_send`
export const toolDescription = `发票信息回传接口（新版）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/info/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "invoice_info_list",
    "m_short_name",
    "sub_m_short_name"
  ]
}
export const flatMap = {}