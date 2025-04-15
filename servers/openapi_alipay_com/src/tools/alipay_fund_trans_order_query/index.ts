export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_trans_order_query`
export const toolDescription = `查询转账订单接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/trans/order/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_biz_no",
    "order_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}