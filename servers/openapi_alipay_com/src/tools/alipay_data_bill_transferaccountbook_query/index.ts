export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_transferaccountbook_query`
export const toolDescription = `子账本充提转账单查询(incubating)`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/transferaccountbook/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_time",
    "end_time",
    "type",
    "agreement_no",
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