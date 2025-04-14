export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_open_modify`
export const toolDescription = `修改商品接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/open/modify`
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
    "item_id",
    "material_list",
    "name",
    "property_list",
    "sku_list",
    "standard_category_id",
    "status",
    "type"
  ]
}
export const flatMap = {}