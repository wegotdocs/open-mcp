export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_buy_query`
export const toolDescription = `支付宝商家账户买入交易查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/buy/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_time",
    "end_time",
    "alipay_order_no",
    "merchant_order_no",
    "store_no",
    "page_no",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}