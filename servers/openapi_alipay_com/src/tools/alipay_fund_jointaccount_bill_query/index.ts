export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_bill_query`
export const toolDescription = `因公付账单查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/bill/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "account_id",
    "page_num",
    "page_size",
    "user_id",
    "open_id",
    "start_date",
    "end_date",
    "agreement_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}