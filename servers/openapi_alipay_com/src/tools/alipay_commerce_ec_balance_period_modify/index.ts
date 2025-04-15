export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_balance_period_modify`
export const toolDescription = `企业码月对账单账期修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/balance/period/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "bill_day",
    "enterprise_id"
  ]
}
export const flatMap = {}