export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_campaign_order_voucher_consult`
export const toolDescription = `订单优惠前置咨询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/campaign/order/voucher/consult`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "business_param",
    "item_consult_list",
    "order_amount",
    "scene_code",
    "specified_app_id"
  ]
}
export const flatMap = {}