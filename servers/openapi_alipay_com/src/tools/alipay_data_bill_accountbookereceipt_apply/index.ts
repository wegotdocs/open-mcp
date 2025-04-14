export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_accountbookereceipt_apply`
export const toolDescription = `申请子账本电子回单(incubating)`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/accountbookereceipt/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "key",
    "store_no",
    "type"
  ]
}
export const flatMap = {}