export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_accountbook_create`
export const toolDescription = `资金记账本开通`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/accountbook/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ext_info",
    "merchant_user_id",
    "merchant_user_type",
    "scene_code"
  ]
}
export const flatMap = {}