export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_bizfundagent_query`
export const toolDescription = `ISV代理商户资金业务账单查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/bizfundagent/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_time",
    "end_time",
    "page_no",
    "page_size",
    "agreement_type",
    "agreement_no",
    "account_book_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}