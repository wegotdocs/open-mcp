export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_shop_close`
export const toolDescription = `蚂蚁店铺关闭`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/shop/close`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ip_role_id",
    "shop_id",
    "store_id"
  ]
}
export const flatMap = {}