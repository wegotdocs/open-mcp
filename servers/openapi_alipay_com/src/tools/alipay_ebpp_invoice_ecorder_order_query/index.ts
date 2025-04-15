export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_ecorder_order_query`
export const toolDescription = `企业码订单查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/ecorder/order/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "account_id",
    "agreement_no",
    "order_id",
    "order_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}