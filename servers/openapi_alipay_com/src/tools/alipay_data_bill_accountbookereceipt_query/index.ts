export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_accountbookereceipt_query`
export const toolDescription = `查询子账本电子回单状态(incubating)`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/accountbookereceipt/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "file_id",
    "agreement_no",
    "agreement_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}