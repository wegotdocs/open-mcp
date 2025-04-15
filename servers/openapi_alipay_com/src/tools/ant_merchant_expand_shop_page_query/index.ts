export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_shop_page_query`
export const toolDescription = `店铺分页查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/shop/pagequery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "ip_role_id",
    "page_num",
    "page_size",
    "address_version"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}