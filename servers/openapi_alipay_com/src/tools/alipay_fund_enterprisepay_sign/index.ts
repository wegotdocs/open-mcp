export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_enterprisepay_sign`
export const toolDescription = `因公付企业签约`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/enterprisepay/sign`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_name",
    "appoint_sign_terminal",
    "biz_scene",
    "ext_params",
    "identity",
    "identity_name",
    "identity_type",
    "out_biz_no",
    "out_entity_id",
    "out_source",
    "product_code"
  ]
}
export const flatMap = {}