export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_logistics_invoice_istdwaybill_query`
export const toolDescription = `查询即时配送订单的开票结果`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/logistics/invoice/istdwaybill/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "logistics_code",
    "out_invoice_request_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}