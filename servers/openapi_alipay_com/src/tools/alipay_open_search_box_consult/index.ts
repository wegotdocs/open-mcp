export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_box_consult`
export const toolDescription = `搜索直达创建预校验`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/box/consult`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "area_keywords",
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