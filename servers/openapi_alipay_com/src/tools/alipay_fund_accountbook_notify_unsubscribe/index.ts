export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_accountbook_notify_unsubscribe`
export const toolDescription = `记账本通知取消订阅接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/accountbook/notify/unsubscribe`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_book_id",
    "agreement_no",
    "biz_scene",
    "product_code"
  ]
}
export const flatMap = {}