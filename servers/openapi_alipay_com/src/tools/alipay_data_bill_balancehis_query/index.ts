export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_balancehis_query`
export const toolDescription = `支付宝商家账户历史余额查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/balancehis/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "biz_date",
    "biz_month"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}