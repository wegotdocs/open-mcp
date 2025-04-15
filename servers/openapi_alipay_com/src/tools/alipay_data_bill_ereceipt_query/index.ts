export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_ereceipt_query`
export const toolDescription = `查询电子回单状态(incubating)`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/ereceipt/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "file_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}