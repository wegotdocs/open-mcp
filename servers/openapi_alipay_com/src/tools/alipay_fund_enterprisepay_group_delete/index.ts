export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_enterprisepay_group_delete`
export const toolDescription = `因公付删除账户下群组`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/enterprisepay/group/delete`
export const method = `delete`
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