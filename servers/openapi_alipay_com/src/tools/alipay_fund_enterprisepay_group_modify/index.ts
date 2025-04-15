export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_enterprisepay_group_modify`
export const toolDescription = `因公付更新账户下群组`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/enterprisepay/group/modify`
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
    "operation_type_list",
    "out_biz_no",
    "product_code"
  ]
}
export const flatMap = {}