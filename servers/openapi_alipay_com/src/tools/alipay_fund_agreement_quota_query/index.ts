export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_agreement_quota_query`
export const toolDescription = `额度查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/agreement/quota/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no_list",
    "biz_scene",
    "product_code"
  ]
}
export const flatMap = {}