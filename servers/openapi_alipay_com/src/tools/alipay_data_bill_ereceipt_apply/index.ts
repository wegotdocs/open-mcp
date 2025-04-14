export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_ereceipt_apply`
export const toolDescription = `申请电子回单(incubating)`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/ereceipt/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bill_user_id",
    "key",
    "type"
  ]
}
export const flatMap = {}