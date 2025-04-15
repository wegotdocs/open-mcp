export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_shop_query`
export const toolDescription = `店铺查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/shop`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "shop_id",
    "store_id",
    "ip_role_id",
    "address_version",
    "need_recommend",
    "need_industry_info",
    "need_industry_license"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}