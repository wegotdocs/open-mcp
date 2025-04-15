export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_box_apply`
export const toolDescription = `申请创建搜索直达配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/box/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "box_desc",
    "brand_id",
    "business_benefit_switch",
    "business_district_ids",
    "custom_keywords",
    "image_id",
    "image_name",
    "merchant_id",
    "related_accounts",
    "service_infos",
    "target_appid"
  ]
}
export const flatMap = {}