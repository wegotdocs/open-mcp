export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_transfer`
export const toolDescription = `协议由普通通用代扣协议产品转移到周期扣协议产品`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/transfer`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "period_rule_params",
    "target_product_code"
  ]
}
export const flatMap = {}