export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_accountbook_notify_query`
export const toolDescription = `记账本通知订阅关系查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/accountbook/notify/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "account_book_id",
    "agreement_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}