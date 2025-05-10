export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_order_query`
export const toolDescription = `根据外部订单号查询发票信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/order/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "order_no",
    "m_short_name",
    "sub_m_short_name"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}