export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_delivery_create`
export const toolDescription = `创建推广计划`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/delivery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "belong_merchant_info",
    "delivery_base_info",
    "delivery_booth_code",
    "delivery_config_list",
    "delivery_play_config",
    "delivery_target_rule",
    "idem_no",
    "merchant_access_mode",
    "out_biz_no"
  ]
}
export const flatMap = {}