export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_enterprisepay_group_query`
export const toolDescription = `因公付查询账户下群组`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/enterprisepay/group/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "account_id",
    "agreement_no",
    "out_biz_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}