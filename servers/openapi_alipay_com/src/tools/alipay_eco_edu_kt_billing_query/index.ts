export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_edu_kt_billing_query`
export const toolDescription = `缴费账单查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/edu/kt/billing/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "isv_pid",
    "school_pid",
    "out_trade_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}