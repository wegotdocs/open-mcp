export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_bill_get`
export const toolDescription = `查询账单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/bill/get`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "auth_token",
    "order_type",
    "merchant_order_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}