export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_enterprisepay_unsign`
export const toolDescription = `因公付企业解约`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/enterprisepay/unsign`
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
    "biz_scene",
    "product_code"
  ]
}
export const flatMap = {}