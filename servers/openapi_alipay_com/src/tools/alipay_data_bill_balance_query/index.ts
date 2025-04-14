export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_balance_query`
export const toolDescription = `支付宝商家账户当前余额查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/balance/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "bill_user_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}