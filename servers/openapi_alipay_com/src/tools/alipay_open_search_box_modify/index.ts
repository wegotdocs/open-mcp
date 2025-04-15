export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_box_modify`
export const toolDescription = `修改搜索直达配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/box/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "box_desc",
    "box_id",
    "brand_id",
    "business_benefit_switch",
    "business_district_ids",
    "custom_keywords",
    "image_id",
    "image_name",
    "merchant_id",
    "module_id",
    "module_type",
    "related_accounts",
    "service_infos",
    "target_appid"
  ]
}
export const flatMap = {}