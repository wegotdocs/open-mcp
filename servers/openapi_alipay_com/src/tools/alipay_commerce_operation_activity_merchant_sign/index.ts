export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_operation_activity_merchant_sign`
export const toolDescription = `商户签约活动`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/operation/activity/merchant/sign`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "consumption_threshold",
    "discount_amount",
    "type"
  ]
}
export const flatMap = {}