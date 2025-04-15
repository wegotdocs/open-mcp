export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_applystatus_query`
export const toolDescription = `根据外部订单号查询开票状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/applystatus/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "m_short_name",
    "order_no_list",
    "sub_m_short_name"
  ]
}
export const flatMap = {}