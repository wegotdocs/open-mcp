export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_modify`
export const toolDescription = `商品修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/modify`
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
    "item_id",
    "label_list",
    "main_pic",
    "name",
    "op_timestamp",
    "scene",
    "sku_list",
    "status"
  ]
}
export const flatMap = {}