export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_enterprisepay_group_add`
export const toolDescription = `因公付新增账户下群组`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/enterprisepay/group/add`
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
    "fund_ext_info",
    "name",
    "out_biz_no",
    "product_code"
  ]
}
export const flatMap = {}