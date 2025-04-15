export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_sycn`
export const toolDescription = `发票信息同步至支付宝`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/sycn`
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