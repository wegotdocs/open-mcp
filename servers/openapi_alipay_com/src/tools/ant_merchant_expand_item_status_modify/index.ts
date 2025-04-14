export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_item_status_modify`
export const toolDescription = `商品状态修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/item/status/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "item_id",
    "status"
  ]
}
export const flatMap = {}