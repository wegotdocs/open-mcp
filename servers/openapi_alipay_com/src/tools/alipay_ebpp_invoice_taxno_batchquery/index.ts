export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_taxno_batchquery`
export const toolDescription = `获取指定企业的发票要素列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/taxno/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enable_trade_out",
    "end_invoice_date",
    "invoice_kind_list",
    "limit_size",
    "page_num",
    "scene",
    "start_invoice_date",
    "tax_no"
  ]
}
export const flatMap = {}