export { inputParams } from "./schema/root.js"

export const toolName = `alipay_offline_market_shop_summary_batchquery`
export const toolDescription = `门店摘要信息批量查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/offline/market/shop/summary/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_channel",
    "brand_name",
    "city_code",
    "district_code",
    "op_role",
    "page_no",
    "page_size",
    "province_code",
    "query_type",
    "related_partner_id",
    "shop_id",
    "shop_status"
  ]
}
export const flatMap = {}