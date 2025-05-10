export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_accountbook_query`
export const toolDescription = `资金记账本的信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/accountbook/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_book_id",
    "merchant_user_id",
    "scene_code",
    "ext_info"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}