export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_instantdelivery_merchantshop_create`
export const toolDescription = `即时配送商家门店创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/instantdelivery/merchantshop/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "contact_name",
    "detail_address",
    "enterprise_city",
    "enterprise_district",
    "enterprise_province",
    "latitude",
    "longitude",
    "out_biz_no",
    "phone",
    "poiid",
    "shop_category",
    "shop_name",
    "shop_no"
  ]
}
export const flatMap = {}