export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_agreement_quota_modify`
export const toolDescription = `额度设置接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/agreement/quota/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_quota_modify_list",
    "biz_scene",
    "product_code"
  ]
}
export const flatMap = {}