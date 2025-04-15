export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_create`
export const toolDescription = `商品创建接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "detail_url",
    "ext_info",
    "external_item_id",
    "front_category_id",
    "label_list",
    "main_pic",
    "name",
    "scene",
    "sku_list",
    "target_id",
    "target_type"
  ]
}
export const flatMap = {}