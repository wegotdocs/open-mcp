export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_open_create`
export const toolDescription = `创建商品接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/open/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "ext_info",
    "material_list",
    "name",
    "property_list",
    "scene",
    "sku_list",
    "standard_category_id",
    "target_id",
    "target_type",
    "type"
  ]
}
export const flatMap = {}