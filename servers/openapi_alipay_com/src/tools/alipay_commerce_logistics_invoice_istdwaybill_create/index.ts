export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_logistics_invoice_istdwaybill_create`
export const toolDescription = `开即时配送订单发票`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/logistics/invoice/istdwaybill/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "invoice",
    "logistics_code",
    "out_invoice_request_no",
    "waybill_invoices"
  ]
}
export const flatMap = {}